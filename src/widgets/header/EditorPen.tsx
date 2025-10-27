"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Pencil } from "lucide-react";
import { usePathname } from "next/navigation";
import { useLocale } from "next-intl";

export default function EditorPen() {
  const [isAdmin, setIsAdmin] = useState(false);
  const pathname = usePathname(); // например: /ru, /ru/projects/5, /kk/about
  const localeFromIntl = useLocale(); // "ru" | "kk" | "en"
  const backendUrl =
    process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:1337";

  useEffect(() => {
    const checkAdmin = () =>
      setIsAdmin(localStorage.getItem("isAdmin") === "true");
    checkAdmin();
    window.addEventListener("storage", checkAdmin);
    return () => window.removeEventListener("storage", checkAdmin);
  }, []);

  if (!isAdmin) return null;

  // 1) Определяем локаль (из next-intl либо из URL)
  const LOCALES = ["ru", "kk", "en"] as const;
  let locale = localeFromIntl || "ru";
  const rawParts = pathname.split("/").filter(Boolean);

  if (rawParts[0] && LOCALES.includes(rawParts[0] as any)) {
    locale = rawParts[0] as (typeof LOCALES)[number];
  }

  // 2) Снимаем префикс локали из пути, чтобы понять ресурс
  const parts =
    rawParts[0] && LOCALES.includes(rawParts[0] as any)
      ? rawParts.slice(1)
      : rawParts;

  // 3) Маппинги фронтовых роутов -> Strapi API имена
  const singleTypeMap: Record<string, string> = {
    // /ru -> homepage
    "": "api::homepage.homepage",
    // /ru/about
    about: "api::aboutpage.aboutpage",
    // /ru/contact
    contact: "api::contactpage.contactpage",
  };

  const collectionMap: Record<string, string> = {
    // /ru/projects(/:id)
    projects: "api::project.project",
    // /ru/articles(/:id)
    articles: "api::article.article",
    // /ru/partners(/:id)
    partners: "api::partner.partner",
  };

  // 4) Определяем тип: single/collection + id
  let adminUrl = `${backendUrl}/admin`;
  let apiName = "";
  let isSingle = false;
  let id: string | undefined;

  if (parts.length === 0) {
    // пример: /ru -> homepage single type
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
    const [seg, maybeId] = parts;
    if (collectionMap[seg]) {
      apiName = collectionMap[seg];
      isSingle = false;
      id = maybeId; // /ru/projects/5
    }
  }

  // 5) Строим путь в админку
  // ВАЖНО: у тебя пример с "single-types" (через дефис и во множественном числе), поэтому используем его.
  // Для коллекций — аналогично "collection-types".
  if (apiName) {
    const typeSegment = isSingle ? "single-types" : "collection-types";
    adminUrl += `/content-manager/${typeSegment}/${apiName}`;
    if (!isSingle && id) adminUrl += `/${id}`;
    // добавим локаль (как в твоём рабочем примере)
    const qs = new URLSearchParams({
      "plugins[i18n][locale]": locale,
    }).toString();
    adminUrl += `?${qs}`;
  }
  // Если apiName не определился — останется просто /admin

  return (
    <Link
      href={adminUrl}
      target="_blank"
      className="flex items-center gap-2 text-gray-600 hover:text-black">
      <Pencil size={20} />
      <span>Редактировать</span>
    </Link>
  );
}
