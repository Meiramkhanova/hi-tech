"use client";

import { useHeader } from "@/entities/header/HeaderClientProvider";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface NavLinksProps {
  className?: string;
  linkClassName?: string;
  spanClassName?: string;
}

function NavLinks({ className, linkClassName, spanClassName }: NavLinksProps) {
  const navLinks = useHeader();

  if (!navLinks) return null;

  return (
    <div className={cn("navlinks flex items-center gap-12", className)}>
      {navLinks
        .sort((a, b) => a.id - b.id)
        .map((navlink) =>
          navlink.url ? (
            <Link
              key={navlink.id}
              href={navlink.url}
              className={cn(
                "navlink hover:text-theprimary transition-all duration-300",
                linkClassName
              )}>
              {navlink.text}
            </Link>
          ) : (
            <span key={navlink.id} className={cn("navlink", spanClassName)}>
              {navlink.text}
            </span>
          )
        )}
    </div>
  );
}

export default NavLinks;
