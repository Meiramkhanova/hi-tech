"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu } from "lucide-react";
import { useEffect } from "react";

function TheMenu() {
  useEffect(() => {
    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;
    document.documentElement.style.setProperty(
      "--scrollbar-width",
      `${scrollbarWidth}px`
    );
  }, []);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="w-[56px] h-14 flex items-center justify-center bg-thesecondary rounded-2xl shrink-0 cursor-pointer">
        <Menu className="w-6 h-6 stroke-white" />
      </DropdownMenuTrigger>

      <DropdownMenuContent
        className="w-[calc(100vw-var(--scrollbar-width)-64px)] h-[calc(100vh-116px)]"
        sideOffset={12}
        align="end">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem>Billing</DropdownMenuItem>
        <DropdownMenuItem>Team</DropdownMenuItem>
        <DropdownMenuItem>Subscription</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default TheMenu;
