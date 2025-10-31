import AiLittleIcon from "@/shared/icons/AiLittleIcon";
import Image from "next/image";
import Link from "next/link";

function Logo() {
  return (
    <div className="logo flex items-center gap-4">
      <Link
        href="/"
        className="logo bg-theprimary size-14 rounded-2xl flex items-center justify-center shrink-0">
        <AiLittleIcon />
      </Link>

      <div className="institute-title text-theprimary uppercase font-medium text-xl 2xl:hidden">
        AI <br /> Institute
      </div>
    </div>
  );
}

export default Logo;
