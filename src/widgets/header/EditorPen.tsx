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

  // Загружаем типы контента
  useEffect(() => {
    const loadTypes = () => {
      try {
        const parsed = JSON.parse(
          sessionStorage.getItem("strapiTypes") || "[]"
        );
        setStrapiTypes(parsed);
      } catch {
        setStrapiTypes([]);
      }
    };
    loadTypes();
    window.addEventListener("admin-toggle", loadTypes);
    return () => window.removeEventListener("admin-toggle", loadTypes);
  }, []);

  // Проверяем isAdmin
  useEffect(() => {
    const checkAdmin = () =>
      setIsAdmin(sessionStorage.getItem("isAdmin") === "true");
    checkAdmin();
    window.addEventListener("admin-toggle", checkAdmin);
    return () => window.removeEventListener("admin-toggle", checkAdmin);
  }, []);

  // Основная логика (оставь как есть, не трогаем)
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

    // ... остальная логика (оставь без изменений)
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
