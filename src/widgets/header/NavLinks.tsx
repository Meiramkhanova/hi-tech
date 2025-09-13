"use client";

import { useHeader } from "@/entities/header/HeaderClientProvider";
import Link from "next/link";

function NavLinks() {
  const navLinks = useHeader();

  if (!navLinks) return null;

  return (
    <div className="navlinks flex items-center gap-12">
      {navLinks
        .sort((a, b) => a.id - b.id)
        .map((navlink) =>
          navlink.url ? (
            <Link
              key={navlink.id}
              href={navlink.url}
              className="navlink hover:text-theprimary transition-all duration-300">
              {navlink.text}
            </Link>
          ) : (
            <span key={navlink.id} className="navlink">
              {navlink.text}
            </span>
          )
        )}
    </div>
  );
}

export default NavLinks;
