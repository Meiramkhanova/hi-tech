import { navlinks } from "@/shared/config/navigation";
import Link from "next/link";

function NavLinks() {
  return (
    <div className="navlinks flex items-center gap-12">
      {navlinks.map((navlink) => (
        <Link
          key={navlink.id}
          href={navlink.link}
          className="navlink hover:text-theprimary transition-all duration-300">
          {navlink.name}
        </Link>
      ))}
    </div>
  );
}

export default NavLinks;
