"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { Pencil } from "lucide-react";
import { usePathname } from "next/navigation";
import { useLocale } from "next-intl";

type StrapiType = {
  uid: string;
  apiID: string;
  kind: "singleType" | "collectionType";
};

const LOCALES = ["ru", "kk", "en"] as const;

// Нормализация строк для матчинга ("Lab-Direction" → "labdirection")
function norm(s: string) {
  return s.toLowerCase().replace(/[^a-z0-9]/g, "");
}

// Примитивная «сингуларизация»: projects → project, companies → company
function singularize(s: string) {
  if (s.endsWith("ies")) return s.slice(0, -3) + "y";
  if (s.endsWith("ses")) return s.slice(0, -2);
  if (s.endsWith("s")) return s.slice(0, -1);
  return s;
}

// Карта явных соответствий «сегмент URL → apiID» для single-типов
// (минимум — homepage, about, analytics c опечаткой и т.п.)
const overrideSingles: Record<string, string> = {
  "": "homepage", // / → homepage
  home: "homepage",
  about: "aboutpage",
  contact: "contactpage",
  analytics: "analytycspage", // как в твоём дампе
};

// Аналогично для коллекций (если надо подкорректировать форму)
const overrideCollections: Record<string, string> = {
  projects: "project",
  experts: "expert",
  tabs: "tab",
  partners: "partner",
};

export default function EditorPen() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [adminUrl, setAdminUrl] = useState<string | null>(null);

  const pathname = usePathname();
  const localeFromIntl = useLocale();
  const backendUrl =
    process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:1337";

  // читаем типы один раз из localStorage (если они уже закачаны хоткеем)
  const strapiTypes: StrapiType[] = useMemo(() => {
    try {
      return JSON.parse(localStorage.getItem("strapiTypes") || "[]");
    } catch {
      return [];
    }
  }, [isAdmin]); // перечитывать, когда включили admin-режим

  useEffect(() => {
    const checkAdmin = () =>
      setIsAdmin(localStorage.getItem("isAdmin") === "true");
    checkAdmin();
    window.addEventListener("storage", checkAdmin);
    return () => window.removeEventListener("storage", checkAdmin);
  }, []);

  useEffect(() => {
    if (!isAdmin) return;

    // Сбрасываем, чтобы не «залипала» старая ссылка (например, homepage)
    setAdminUrl(null);

    // --- разбор пути и локали
    const raw = pathname.split("/").filter(Boolean);
    let locale = (localeFromIntl as (typeof LOCALES)[number]) || "ru";

    const parts = (() => {
      if (raw[0] && (LOCALES as readonly string[]).includes(raw[0])) {
        locale = raw[0] as (typeof LOCALES)[number];
        return raw.slice(1);
      }
      return raw;
    })();

    // корень сайта → single homepage
    const firstSeg = parts[0] ?? "";

    // === Обработка страниц типа /ru/[slug] для коллекции tab-content ===
    if (parts.length === 1 && firstSeg) {
      const slug = firstSeg;
      const localeParam = `plugins[i18n][locale]=${encodeURIComponent(locale)}`;

      fetch(
        `${backendUrl}/api/tab-contents?filters[slug]=${encodeURIComponent(
          slug
        )}&fields=documentId,id&populate[sections][populate]=*&locale=${locale}`,
        {
          headers: { "Content-Type": "application/json" },
        }
      )
        .then((r) => r.json())
        .then((data) => {
          console.log("🔎 Ответ от Strapi:", data);

          const entry = data?.data?.[0];
          const id = entry?.documentId || entry?.id;

          if (id) {
            // ✅ если нашли запись — открываем страницу редактирования
            setAdminUrl(
              `${backendUrl}/admin/content-manager/collection-types/api::tab-content.tab-content/${id}?${localeParam}`
            );
          } else {
            // ❌ если slug не найден — открываем список
            console.warn("❌ Не нашли slug:", slug);
            setAdminUrl(
              `${backendUrl}/admin/content-manager/collection-types/api::tab-content.tab-content?${localeParam}`
            );
          }
        })
        .catch((err) => {
          console.error("⚠️ Ошибка при запросе tab-contents:", err);
          setAdminUrl(
            `${backendUrl}/admin/content-manager/collection-types/api::tab-content.tab-content?${localeParam}`
          );
        });

      return;
    }

    // подготавливаем справочники
    const singles = strapiTypes.filter((t) => t.kind === "singleType");
    const collections = strapiTypes.filter((t) => t.kind === "collectionType");

    const firstSegNorm = norm(firstSeg);
    const firstSegSingular = singularize(firstSegNorm);

    // ---------- 1) Пытаемся сопоставить single-type
    let single: StrapiType | undefined;

    // через override
    if (overrideSingles[firstSeg]) {
      const desired = norm(overrideSingles[firstSeg]);
      single = singles.find((s) => norm(s.apiID) === desired);
    }

    // если не найден через override — пробуем эвристику:
    if (!single) {
      // точное совпадение apiID
      single = singles.find((s) => norm(s.apiID) === firstSegNorm);
    }
    if (!single && firstSeg === "") {
      // корень → homepage
      single = singles.find((s) => norm(s.apiID) === "homepage");
    }
    if (!single) {
      // префикс/похожесть (about ↔ aboutpage)
      single = singles.find((s) => {
        const id = norm(s.apiID);
        return id.startsWith(firstSegNorm) || firstSegNorm.startsWith(id);
      });
    }

    // ---------- 2) Если single найден и это страница без доп. сегментов — кидаем в single
    if (single && parts.length <= 1) {
      const qs = new URLSearchParams({
        "plugins[i18n][locale]": locale,
      }).toString();
      setAdminUrl(
        `${backendUrl}/admin/content-manager/single-types/${single.uid}?${qs}`
      );
      return;
    }

    // ---------- 3) Иначе считаем, что это коллекция
    // через override
    let collection: StrapiType | undefined;
    if (overrideCollections[firstSeg]) {
      const desired = norm(overrideCollections[firstSeg]);
      collection = collections.find((c) => norm(c.apiID) === desired);
    }

    // без override — матчим эвристикой
    if (!collection) {
      collection =
        collections.find((c) => norm(c.apiID) === firstSegNorm) ||
        collections.find((c) => norm(c.apiID) === firstSegSingular) ||
        collections.find((c) => {
          const id = norm(c.apiID);
          // projects ↔ project, lab-direction ↔ labdirection
          return id === singularize(id) && id === firstSegSingular;
        }) ||
        collections.find((c) => {
          const id = norm(c.apiID);
          // мягкое совпадение по началу/включению
          return (
            id.startsWith(firstSegSingular) || firstSegSingular.startsWith(id)
          );
        });
    }

    if (!collection) {
      // не смогли ничего распознать — лучше молча не показывать кнопку
      setAdminUrl(`${backendUrl}/admin`);
      return;
    }

    const qsBase = `plugins[i18n][locale]=${encodeURIComponent(locale)}`;

    // если есть слаг → ищем id и ведём в конкретную запись
    const maybeSlug = parts[1];
    if (maybeSlug) {
      // ВАЖНО: поле slug должно реально называться slug
      fetch(
        `${backendUrl}/api/${
          collection.apiID
        }?filters[slug][$eq]=${encodeURIComponent(
          maybeSlug
        )}&fields=id&locale=${encodeURIComponent(locale)}`,
        { headers: { "Content-Type": "application/json" } }
      )
        .then((r) => r.json())
        .then((data) => {
          const id = data?.data?.[0]?.id;
          if (id) {
            setAdminUrl(
              `${backendUrl}/admin/content-manager/collection-types/${collection.uid}/${id}?${qsBase}`
            );
          } else {
            setAdminUrl(
              `${backendUrl}/admin/content-manager/collection-types/${collection.uid}?${qsBase}`
            );
          }
        })
        .catch(() => {
          setAdminUrl(
            `${backendUrl}/admin/content-manager/collection-types/${collection.uid}?${qsBase}`
          );
        });
    } else {
      // нет слага — открываем список
      setAdminUrl(
        `${backendUrl}/admin/content-manager/collection-types/${collection.uid}?${qsBase}`
      );
    }
  }, [isAdmin, pathname, localeFromIntl, backendUrl, strapiTypes]);

  if (!isAdmin) return null;

  return (
    <Link
      href={adminUrl ?? ""}
      target="_blank"
      className="flex items-center gap-2 text-gray-700 hover:text-black bg-white shadow-md rounded-full px-4 py-2">
      <Pencil size={20} />
      <span>Редактировать</span>
    </Link>
  );
}
