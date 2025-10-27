// пример: components/AdminHotkeyHandler.tsx
"use client";

import { useEffect } from "react";

export default function AdminHotkeyHandler() {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === "k") {
        console.log("Admin mode activated!");
        localStorage.setItem("isAdmin", "true");
        window.dispatchEvent(new Event("storage"));
      }
    };

    console.log("Current admin value:", localStorage.getItem("isAdmin"));

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return null;
}
