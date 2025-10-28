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

// Явные соответствия "slug на фронте" → "apiID в Strapi"
const singlePageMap: Record<string, string> = {
  about: "aboutpage",
  contact: "contactpage",
  analytics: "analytycspage", // 👈 опечатка в Strapi, потому указываем именно так
  home: "homepage",
  "": "homepage", // корневая страница
};

// Нормализация строки ("Lab-Direction" → "labdirection")
function norm(s: string) {
  return s.toLowerCase().replace(/[^a-z0-9]/g, "");
}

// Примитивная сингуларизация (projects → project)
function singularize(s: string) {
  if (s.endsWith("ies")) return s.slice(0, -3) + "y";
  if (s.endsWith("ses")) return s.slice(0, -2);
  if (s.endsWith("s")) return s.slice(0, -1);
  return s;
}

export default function EditorPen() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [adminUrl, setAdminUrl] = useState<string | null>(null);

  const pathname = usePathname();
  const localeFromIntl = useLocale();
  const backendUrl =
    process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:1337";

  const strapiTypes: StrapiType[] = useMemo(() => {
    try {
      return JSON.parse(localStorage.getItem("strapiTypes") || "[]");
    } catch {
      return [];
    }
  }, [isAdmin]);

  useEffect(() => {
    const checkAdmin = () =>
      setIsAdmin(localStorage.getItem("isAdmin") === "true");
    checkAdmin();
    window.addEventListener("storage", checkAdmin);
    return () => window.removeEventListener("storage", checkAdmin);
  }, []);

  useEffect(() => {
    if (!isAdmin) return;

    setAdminUrl(null);

    const raw = pathname.split("/").filter(Boolean);
    let locale = (localeFromIntl as (typeof LOCALES)[number]) || "ru";

    const parts = (() => {
      if (raw[0] && (LOCALES as readonly string[]).includes(raw[0])) {
        locale = raw[0] as (typeof LOCALES)[number];
        return raw.slice(1);
      }
      return raw;
    })();

    const firstSeg = parts[0] ?? "";
    const qsLocale = `plugins[i18n][locale]=${encodeURIComponent(locale)}`;

    // === 1) Проверяем: является ли страница singleType ===
    if (parts.length <= 1 && firstSeg in singlePageMap) {
      const apiId = singlePageMap[firstSeg];
      const type = strapiTypes.find(
        (t) => t.kind === "singleType" && norm(t.apiID) === norm(apiId)
      );
      if (type) {
        setAdminUrl(
          `${backendUrl}/admin/content-manager/single-types/${type.uid}?${qsLocale}`
        );
        return;
      }
    }

    // === 2) Если это одноуровневая страница, не из singleType → считаем tab-content ===
    if (parts.length === 1 && firstSeg) {
      const slug = firstSeg;
      fetch(
        `${backendUrl}/api/tab-contents?filters[slug]=${encodeURIComponent(
          slug
        )}&fields=documentId,id&locale=${locale}`,
        {
          headers: { "Content-Type": "application/json" },
        }
      )
        .then((r) => r.json())
        .then((data) => {
          const entry = data?.data?.[0];
          const id = entry?.documentId || entry?.id;
          if (id) {
            setAdminUrl(
              `${backendUrl}/admin/content-manager/collection-types/api::tab-content.tab-content/${id}?${qsLocale}`
            );
          } else {
            setAdminUrl(
              `${backendUrl}/admin/content-manager/collection-types/api::tab-content.tab-content?${qsLocale}`
            );
          }
        })
        .catch(() =>
          setAdminUrl(
            `${backendUrl}/admin/content-manager/collection-types/api::tab-content.tab-content?${qsLocale}`
          )
        );
      return;
    }

    // === 3) Стандартная логика для коллекций с slug’ом (projects/slug и т.п.) ===
    const collections = strapiTypes.filter((t) => t.kind === "collectionType");
    const firstSegNorm = norm(firstSeg);
    const firstSegSingular = singularize(firstSegNorm);
    const maybeSlug = parts[1];

    const collection =
      collections.find((c) => norm(c.apiID) === firstSegNorm) ||
      collections.find((c) => norm(c.apiID) === firstSegSingular);

    if (!collection) {
      setAdminUrl(`${backendUrl}/admin`);
      return;
    }

    if (maybeSlug) {
      fetch(
        `${backendUrl}/api/${
          collection.apiID
        }?filters[slug][$eq]=${encodeURIComponent(
          maybeSlug
        )}&fields=documentId,id&locale=${locale}`,
        { headers: { "Content-Type": "application/json" } }
      )
        .then((r) => r.json())
        .then((data) => {
          const entry = data?.data?.[0];
          const id = entry?.documentId || entry?.id;
          if (id) {
            setAdminUrl(
              `${backendUrl}/admin/content-manager/collection-types/${collection.uid}/${id}?${qsLocale}`
            );
          } else {
            setAdminUrl(
              `${backendUrl}/admin/content-manager/collection-types/${collection.uid}?${qsLocale}`
            );
          }
        })
        .catch(() =>
          setAdminUrl(
            `${backendUrl}/admin/content-manager/collection-types/${collection.uid}?${qsLocale}`
          )
        );
    } else {
      setAdminUrl(
        `${backendUrl}/admin/content-manager/collection-types/${collection.uid}?${qsLocale}`
      );
    }
  }, [isAdmin, pathname, localeFromIntl, backendUrl, strapiTypes]);

  if (!isAdmin || !adminUrl) return null;

  return (
    <Link
      href={adminUrl}
      target="_blank"
      className="flex items-center gap-2 text-gray-700 hover:text-black bg-white shadow-md rounded-full px-4 py-2">
      <Pencil size={20} />
      <span>Редактировать</span>
    </Link>
  );
}
