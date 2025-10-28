"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Pencil } from "lucide-react";
import { usePathname } from "next/navigation";
import { useLocale } from "next-intl";

export default function EditorPen() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [adminUrl, setAdminUrl] = useState<string | null>(null);
  const pathname = usePathname();
  const localeFromIntl = useLocale();
  const backendUrl =
    process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:1337";

  useEffect(() => {
    const checkAdmin = () =>
      setIsAdmin(localStorage.getItem("isAdmin") === "true");

    checkAdmin();
    window.addEventListener("storage", checkAdmin);
    return () => window.removeEventListener("storage", checkAdmin);
  }, []);

  useEffect(() => {
    if (!isAdmin) return;

    const LOCALES = ["ru", "kk", "en"] as const;
    let locale = localeFromIntl || "ru";
    const rawParts = pathname.split("/").filter(Boolean);

    if (rawParts[0] && LOCALES.includes(rawParts[0] as any)) {
      locale = rawParts[0] as (typeof LOCALES)[number];
    }

    const parts =
      rawParts[0] && LOCALES.includes(rawParts[0] as any)
        ? rawParts.slice(1)
        : rawParts;

    const singleTypeMap: Record<string, string> = {
      "": "api::homepage.homepage",
      about: "api::aboutpage.aboutpage",
      contact: "api::contactpage.contactpage",
      analytics: "api::analytic.analytics",
    };

    const collectionMap: Record<string, string> = {
      articles: "api::article.article",
      projects: "api::project.project",
      partners: "api::partner.partner",
      tabs: "api::tab-content.tab-content",
    };

    let apiName = "";
    let isSingle = false;
    let id: string | undefined;

    if (parts.length === 0) {
      apiName = singleTypeMap[""];
      isSingle = true;
    } else if (parts.length === 1) {
      const seg = parts[0];
      if (singleTypeMap[seg]) {
        apiName = singleTypeMap[seg];
        isSingle = true;
      } else if (collectionMap[seg]) {
        apiName = collectionMap[seg];
        isSingle = false;
      }
    } else if (parts.length >= 2) {
      const [seg, maybeSlug] = parts;
      if (collectionMap[seg]) {
        apiName = collectionMap[seg];
        isSingle = false;

        // 🔥 Попробуем получить ID элемента по slug
        fetch(
          `${backendUrl}/api/${seg}?filters[slug][$eq]=${maybeSlug}&fields[slug,id]&locale=${locale}`,
          {
            headers: { "Content-Type": "application/json" },
          }
        )
          .then((res) => res.json())
          .then((data) => {
            const item = data?.data?.[0];
            if (item?.id) {
              const id = item.id;
              const qs = new URLSearchParams({
                "plugins[i18n][locale]": locale,
              }).toString();
              setAdminUrl(
                `${backendUrl}/admin/content-manager/collection-types/${apiName}/${id}?${qs}`
              );
            } else {
              // если не нашли slug — ведём просто в список
              setAdminUrl(
                `${backendUrl}/admin/content-manager/collection-types/${apiName}?plugins[i18n][locale]=${locale}`
              );
            }
          })
          .catch(() => {
            setAdminUrl(
              `${backendUrl}/admin/content-manager/collection-types/${apiName}?plugins[i18n][locale]=${locale}`
            );
          });
      }
    }

    if (isSingle && apiName) {
      const qs = new URLSearchParams({
        "plugins[i18n][locale]": locale,
      }).toString();
      setAdminUrl(
        `${backendUrl}/admin/content-manager/single-types/${apiName}?${qs}`
      );
    }
  }, [isAdmin, pathname]);

  if (!isAdmin || !adminUrl) return null;

  return (
    <Link
      href={adminUrl}
      target="_blank"
      className="flex items-center gap-2 text-gray-600 hover:text-black bg-white shadow-md rounded-full px-4 py-2">
      <Pencil size={20} />

      <span>Редактировать</span>
    </Link>
  );
}
