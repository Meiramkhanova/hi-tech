"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Pencil } from "lucide-react";
import { usePathname } from "next/navigation";
import { useLocale } from "next-intl";
import { cn } from "@/shared/utils/cn";

type StrapiType = {
  uid: string;
  apiID: string;
  kind: "singleType" | "collectionType";
};

const LOCALES = ["ru", "kk", "en"] as const;

// Соответствия singleType страниц
const singlePageMap: Record<string, string> = {
  about: "aboutpage",
  contact: "contactpage",
  analytics: "analytycspage",
  home: "homepage",
  "": "homepage",
};

function norm(s: string) {
  return s.toLowerCase().replace(/[^a-z0-9]/g, "");
}

function singularize(s: string) {
  if (s.endsWith("ies")) return s.slice(0, -3) + "y";
  if (s.endsWith("ses")) return s.slice(0, -2);
  if (s.endsWith("s")) return s.slice(0, -1);
  return s;
}

export default function EditorPen() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [adminUrl, setAdminUrl] = useState<string | null>(null);
  const [strapiTypes, setStrapiTypes] = useState<StrapiType[]>([]);

  const pathname = usePathname();
  const localeFromIntl = useLocale();
  const backendUrl =
    process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:1337";

  // === Загружаем типы контента из localStorage ===
  useEffect(() => {
    const loadTypes = () => {
      try {
        const parsed = JSON.parse(localStorage.getItem("strapiTypes") || "[]");
        setStrapiTypes(parsed);
      } catch {
        setStrapiTypes([]);
      }
    };
    loadTypes();
    window.addEventListener("storage", loadTypes);
    return () => window.removeEventListener("storage", loadTypes);
  }, []);

  // === Проверка isAdmin ===
  useEffect(() => {
    const checkAdmin = () =>
      setIsAdmin(localStorage.getItem("isAdmin") === "true");
    checkAdmin();
    window.addEventListener("storage", checkAdmin);
    return () => window.removeEventListener("storage", checkAdmin);
  }, []);

  // === Основная логика ===
  useEffect(() => {
    if (!isAdmin || !strapiTypes.length) return;

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

    // === 1) SingleType ===
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

    // === 2.0) Статические страницы, у которых нет записей в админке ===
    if (parts.length === 1 && parts[0] === "laboratories") {
      setAdminUrl(`${backendUrl}/admin`);
      return;
    }

    // === 2) Tab-content (не трогаем, как раньше) ===
    if (parts.length === 1 && firstSeg) {
      const slug = firstSeg;
      fetch(
        `${backendUrl}/api/tab-contents?filters[slug]=${encodeURIComponent(
          slug
        )}&fields=documentId,id&locale=${locale}`,
        { headers: { "Content-Type": "application/json" } }
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

    // === 2.1) Вложенные страницы центров (оба сегмента динамические) ===
    if (parts.length === 2) {
      const firstSeg = decodeURIComponent(parts[0] || "");
      const secondSeg = decodeURIComponent(parts[1] || "");

      fetch(
        `${backendUrl}/api/center-departments?filters[slug][$eq]=${encodeURIComponent(
          secondSeg
        )}&populate[sections][populate]=*&locale=${locale}`,
        { headers: { "Content-Type": "application/json" } }
      )
        .then((r) => r.json())
        .then((data) => {
          const entry = data?.data?.[0];
          const id = entry?.documentId || entry?.id;
          if (id) {
            setAdminUrl(
              `${backendUrl}/admin/content-manager/collection-types/api::center-department.center-department/${id}?${qsLocale}`
            );
          } else {
            setAdminUrl(
              `${backendUrl}/admin/content-manager/collection-types/api::center-department.center-department?${qsLocale}`
            );
          }
        })
        .catch(() =>
          setAdminUrl(
            `${backendUrl}/admin/content-manager/collection-types/api::center-department.center-department?${qsLocale}`
          )
        );
      return;
    }

    // === 3) Обработка школ (и других вложенных коллекций) ===
    // Пример: /biotech-school/schools/biotech-school
    if (
      parts.length >= 3 &&
      (parts[1] === "schools" || singularize(parts[1]) === "school")
    ) {
      const slug = parts[2];
      fetch(
        `${backendUrl}/api/schools?filters[slug][$eq]=${encodeURIComponent(
          slug
        )}&fields=documentId,id&locale=${locale}`,
        { headers: { "Content-Type": "application/json" } }
      )
        .then((r) => r.json())
        .then((data) => {
          const entry = data?.data?.[0];
          const id = entry?.documentId || entry?.id;
          if (id) {
            setAdminUrl(
              `${backendUrl}/admin/content-manager/collection-types/api::school.school/${id}?${qsLocale}`
            );
          } else {
            setAdminUrl(
              `${backendUrl}/admin/content-manager/collection-types/api::school.school?${qsLocale}`
            );
          }
        })
        .catch(() =>
          setAdminUrl(
            `${backendUrl}/admin/content-manager/collection-types/api::school.school?${qsLocale}`
          )
        );
      return;
    }

    // === 4) Остальные стандартные коллекции ===
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
      className={cn(
        "fixed bottom-20 min-w-[16.5rem] right-8 z-50 flex items-center gap-2 px-4 py-2 h-12",
        "border-thesecondary text-thesecondary hover:bg-thesecondary hover:text-white",
        "bg-white border rounded-md tracking-wide cursor-pointer transition-all ease-in-out duration-300"
      )}>
      <Pencil size={20} />
      <span>Редактировать</span>
    </Link>
  );
}
