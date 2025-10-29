"use client";

import { cn } from "@/shared/utils/cn";
import { useEffect, useState } from "react";

export default function AdminHotkeyHandler() {
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const saved = sessionStorage.getItem("isAdmin") === "true";
    setIsAdmin(saved);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.altKey && e.key.toLowerCase() === "k") {
        const current = sessionStorage.getItem("isAdmin") === "true";

        if (current) {
          sessionStorage.removeItem("isAdmin");
          setIsAdmin(false);
          console.log("🚪 Admin mode deactivated");
        } else {
          sessionStorage.setItem("isAdmin", "true");
          setIsAdmin(true);
          console.log("🛠 Admin mode activated!");
        }

        window.dispatchEvent(new CustomEvent("admin-toggle"));
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleExit = () => {
    sessionStorage.removeItem("isAdmin");
    setIsAdmin(false);
    window.dispatchEvent(new CustomEvent("admin-toggle"));
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
