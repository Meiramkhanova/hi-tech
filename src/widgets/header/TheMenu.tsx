"use client";

import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Searching from "./Searching";
import LanguageSelector from "./LanguageSelector";
import NavLinks from "@/shared/ui/NavLinks";

function TheMenu() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        onClick={() => setOpen(true)}
        className="w-[56px] h-14 flex items-center justify-center bg-thesecondary rounded-2xl shrink-0 cursor-pointer 2xl:hidden">
        <Menu className="w-6 h-6 stroke-white" />
      </div>

      <div
        className={cn(
          "fixed top-0 left-0 size-full z-30 bg-black/85 transition-opacity pointer-events-none 2xl:hidden",
          open ? "opacity-50" : "opacity-0"
        )}
      />

      <div
        className={cn(
          "open-menu fixed w-[80%] bg-white p-8 h-full top-0 z-30",
          " overflow-y-auto ease-in duration-500 transition-all 2xl:hidden",
          open ? "left-0" : "left-[-100%]"
        )}>
        <div className="menu-top-bottom flex flex-col gap-6">
          <div className="logo-close flex items-center justify-between w-full">
            <div className="logo-name flex items-center gap-2">
              <Link
                href="/"
                className="logo flex items-center justify-center shrink-0">
                <Image
                  src="/assets/logo-primary.png"
                  alt="logo"
                  width={62}
                  height={62}
                  className="size-14 object-cover"
                />
              </Link>

              <div className="institute-title text-theprimary uppercase font-medium text-2xl 2xl:hidden">
                Hi-Tech <br /> Institute
              </div>
            </div>

            <X onClick={() => setOpen(false)} className="size-9" />
          </div>

          {/* <div className="menu-info flex flex-col gap-8">
            <Searching className="w-full" inputClassName="py-3 rounded-lg" />
          </div> */}

          <NavLinks
            className="gap-0 flex flex-col items-start"
            linkClassName="py-3"
            spanClassName="py-3"
          />

          <div className="w-full lg-switcher-wrapper flex justify-end">
            <LanguageSelector
              selectClassName="bg-thesecondary 2xl:bg-white"
              iconClassName="!text-white !stroke-white"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default TheMenu;
