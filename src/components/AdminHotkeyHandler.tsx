"use client";

import { cn } from "@/shared/utils/cn";
import { useEffect, useState } from "react";

type StrapiContentType = {
  uid: string;
  apiID: string;
  kind: "singleType" | "collectionType";
};

type StrapiResponse = {
  data: {
    uid?: string;
    apiID: string;
    kind: "singleType" | "collectionType";
  }[];
};

export default function AdminHotkeyHandler() {
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("isAdmin") === "true";
    setIsAdmin(saved);

    async function fetchStrapiTypes() {
      const backendUrl =
        process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:1337";

      try {
        const res = await fetch(`${backendUrl}/api/meta/content-types`, {
          headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_ADMIN_TOKEN}`,
          },
        });

        if (!res.ok) {
          console.warn("❌ Ошибка при получении типов контента:", res.status);
          return;
        }

        const json: StrapiResponse = await res.json();

        const types: StrapiContentType[] = json.data
          .filter((t) => t.uid?.startsWith("api::"))
          .map((t) => ({
            uid: t.uid!,
            apiID: t.apiID,
            kind: t.kind,
          }));

        localStorage.setItem("strapiTypes", JSON.stringify(types));
        console.log("💾 Сохранено в localStorage:", types);
      } catch (err) {
        console.error("⚠️ Ошибка fetchStrapiTypes:", err);
      }
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      // console.log("Pressed:", e.key, e.ctrlKey, e.shiftKey, e.altKey);

      if (e.ctrlKey && e.altKey && e.key.toLowerCase() === "k") {
        const current = localStorage.getItem("isAdmin") === "true";
        if (current) {
          localStorage.removeItem("isAdmin");
          localStorage.removeItem("strapiTypes");
          console.log("🚪 Admin mode deactivated");
          setIsAdmin(false);
        } else {
          console.log("🛠 Admin mode activated!");
          localStorage.setItem("isAdmin", "true");
          setIsAdmin(true);
          fetchStrapiTypes();
        }
        window.dispatchEvent(new Event("storage"));
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleExit = () => {
    localStorage.removeItem("isAdmin");
    localStorage.removeItem("strapiTypes");
    setIsAdmin(false);
    window.dispatchEvent(new Event("storage"));
    console.log("🚪 Admin mode deactivated (button)");
  };

  if (!isAdmin) return null;

  return (
    <button
      onClick={handleExit}
      className={cn(
        "fixed h-12 min-w-[16.5rem] bottom-4 right-8 z-50 px-4 py-2 rounded-md",
        "bg-thesecondary hover:brightness-110 border border-thesecondary text-white",
        "tracking-wide cursor-pointer transition-all ease-in-out duration-300"
      )}>
      Выйти из редактирования
    </button>
  );
}
