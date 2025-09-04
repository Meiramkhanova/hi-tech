import Image from "next/image";
import Link from "next/link";

function Logo() {
  return (
    <div className="logo flex items-center gap-0">
      <Link
        href="/"
        className="logo 2xl:bg-theprimary size-14 2xl:rounded-2xl flex items-center justify-center shrink-0">
        <Image
          src="/assets/logo.png"
          alt="logo"
          width={24}
          height={24}
          className="size-6 hidden 2xl:flex object-cover"
        />
        <Image
          src="/assets/logo-primary.png"
          alt="logo"
          width={32}
          height={38}
          className="w-8 h-10 2xl:hidden object-cover"
        />
      </Link>

      <div className="institute-title text-theprimary uppercase font-medium text-xl 2xl:hidden">
        Hi-Tech <br /> Institute
      </div>
    </div>
  );
}

export default Logo;
