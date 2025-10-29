"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Pencil } from "lucide-react";
import { usePathname } from "next/navigation";
import { useLocale } from "next-intl";
import { cn } from "@/shared/utils/cn";
import { useEnv } from "@/providers/EnvProvider";

const LOCALES = ["ru", "kk", "en"] as const;

const singlePageMap: Record<string, string> = {
  about: "aboutpage",
  contact: "contactpage",
  analytics: "analytycspage",
  home: "homepage",
  "": "homepage",
};

// function norm(s: string) {
//   return s.toLowerCase().replace(/[^a-z0-9]/g, "");
// }
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
  const { backendUrl } = useEnv();

  useEffect(() => {
    const updateAll = () => {
      const admin = sessionStorage.getItem("isAdmin") === "true";
      setIsAdmin(admin);
    };
    updateAll();
    window.addEventListener("admin-toggle", updateAll);
    return () => window.removeEventListener("admin-toggle", updateAll);
  }, []);

  useEffect(() => {
    if (!isAdmin) {
      setAdminUrl(null);
      return;
    }

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

    // --- SingleType страницы (about/contact/analytics/home) ---
    if (parts.length <= 1 && firstSeg in singlePageMap) {
      const apiId = singlePageMap[firstSeg]; // например "aboutpage"
      const uid = `api::${apiId}.${apiId}`; // "api::aboutpage.aboutpage"
      setAdminUrl(
        `${backendUrl}/admin/content-manager/single-types/${uid}?${qsLocale}`
      );
      return;
    }

    // --- Специальный роут ---
    if (parts.length === 1 && parts[0] === "laboratories") {
      setAdminUrl(`${backendUrl}/admin`);
      return;
    }

    // --- Tab-content (страницы по слагу первого сегмента) ---
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
          setAdminUrl(
            `${backendUrl}/admin/content-manager/collection-types/api::tab-content.tab-content/${
              id ? id : ""
            }?${qsLocale}`
          );
        })
        .catch(() =>
          setAdminUrl(
            `${backendUrl}/admin/content-manager/collection-types/api::tab-content.tab-content?${qsLocale}`
          )
        );
      return;
    }

    // --- Вложенные страницы центров ---
    if (parts.length === 2) {
      const secondSeg = decodeURIComponent(parts[1] || "");
      fetch(
        `${backendUrl}/api/center-departments?filters[slug][$eq]=${encodeURIComponent(
          secondSeg
        )}&locale=${locale}`,
        { headers: { "Content-Type": "application/json" } }
      )
        .then((r) => r.json())
        .then((data) => {
          const entry = data?.data?.[0];
          const id = entry?.documentId || entry?.id;
          setAdminUrl(
            `${backendUrl}/admin/content-manager/collection-types/api::center-department.center-department/${
              id ? id : ""
            }?${qsLocale}`
          );
        })
        .catch(() =>
          setAdminUrl(
            `${backendUrl}/admin/content-manager/collection-types/api::center-department.center-department?${qsLocale}`
          )
        );
      return;
    }

    // --- Школы ---
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
          setAdminUrl(
            `${backendUrl}/admin/content-manager/collection-types/api::school.school/${
              id ? id : ""
            }?${qsLocale}`
          );
        })
        .catch(() =>
          setAdminUrl(
            `${backendUrl}/admin/content-manager/collection-types/api::school.school?${qsLocale}`
          )
        );
      return;
    }

    // --- Fallback ---
    setAdminUrl(`${backendUrl}/admin`);
  }, [isAdmin, pathname, localeFromIntl, backendUrl]);

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
