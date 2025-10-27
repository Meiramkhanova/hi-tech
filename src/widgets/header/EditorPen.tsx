"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Pencil } from "lucide-react";

function EditorPen() {
  const [isAdmin, setIsAdmin] = useState(false);

  console.log("edsazsa");

  useEffect(() => {
    const checkAdmin = () => {
      const adminStatus = localStorage.getItem("isAdmin") === "true";
      setIsAdmin(adminStatus);
    };

    checkAdmin();
    window.addEventListener("storage", checkAdmin);
    return () => window.removeEventListener("storage", checkAdmin);
  }, []);

  if (!isAdmin) return null;

  return (
    <Link
      href="https://hitech-backend-narxoz.duckdns.org/admin"
      target="_blank"
      className="flex items-center gap-2 text-gray-600 hover:text-black">
      <Pencil size={20} />

      <span>Редактировать</span>
    </Link>
  );
}

export default EditorPen;
