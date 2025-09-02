import Image from "next/image";
import Link from "next/link";

function Logo() {
  return (
    <Link
      href="/"
      className="logo bg-theprimary size-14 rounded-2xl flex items-center justify-center shrink-0">
      <Image
        src="/assets/logo.png"
        alt="logo"
        width={24}
        height={24}
        className="size-6"
      />
    </Link>
  );
}

export default Logo;
