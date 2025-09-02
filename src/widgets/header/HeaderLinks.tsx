import { cn } from "@/shared/utils/cn";
import NavLinks from "./NavLinks";
import Searching from "./Searching";

function HeaderLinks() {
  return (
    <div
      className={cn(
        "header-links-search flex items-center gap-16 justify-between w-full",
        "h-14 px-12 rounded-2xl border flex-1"
      )}>
      <NavLinks />

      <Searching />
    </div>
  );
}

export default HeaderLinks;
