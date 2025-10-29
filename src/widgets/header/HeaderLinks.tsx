import { cn } from "@/shared/utils/cn";
import NavLinks from "../../shared/ui/NavLinks";

function HeaderLinks() {
  return (
    <div
      className={cn(
        "header-links-search hidden 2xl:flex items-center gap-16 justify-between w-full",
        "h-14 px-12 rounded-2xl border flex-1"
      )}>
      <NavLinks />

      {/* <Searching /> */}
    </div>
  );
}

export default HeaderLinks;
