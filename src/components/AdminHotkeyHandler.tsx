"use client";

import { useEffect } from "react";

export default function AdminHotkeyHandler() {
  useEffect(() => {
    async function fetchStrapiTypes() {
      const backendUrl =
        process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:1337";

      const isLocal = backendUrl.includes("localhost");

      try {
        const res = await fetch(`${backendUrl}/api/meta/content-types`, {
          headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_ADMIN_TOKEN}`,
          },
        });

        console.log("🧭 Запрос:", res.url, res.status);

        if (!res.ok) {
          console.warn("❌ Ошибка при получении типов контента:", res.status);
          const errText = await res.text();
          console.log("Ответ от Strapi:", errText);
          return;
        }

        const json = await res.json();
        console.log("✅ Ответ от Strapi:", json);

        const types = json.data
          .filter((t: any) => t.uid?.startsWith("api::"))
          .map((t: any) => ({
            uid: t.uid,
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
      if (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === "k") {
        console.log("🛠 Admin mode activated!");
        localStorage.setItem("isAdmin", "true");
        window.dispatchEvent(new Event("storage"));
        fetchStrapiTypes();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return null;
}
