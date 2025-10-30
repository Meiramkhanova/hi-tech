"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import { usePathname, useRouter } from "next/navigation";

const locales = ["kk", "ru", "en"];

function LanguageSelector({
  className,
  selectClassName,
  iconClassName,
}: {
  className?: string;
  selectClassName?: string;
  iconClassName?: string;
}) {
  const router = useRouter();

  const pathname = usePathname();

  const t = useTranslations("Header");

  const currentLocale = locales.includes(pathname.split("/")[1])
    ? pathname.split("/")[1]
    : "ru";

  const changeLanguage = (locale: string) => {
    const currentLocale = pathname.split("/")[1];

    const pathWithoutLocale = locales.includes(currentLocale)
      ? pathname.replace(`/${currentLocale}`, "")
      : pathname;

    document.cookie = `NEXT_LOCALE=${locale}; path=/; max-age=31536000`;

    router.push(`/${locale}${pathWithoutLocale}`);

    router.refresh();
  };

  return (
    <div className={cn("lg-switcher", className)}>
      <Select value={currentLocale} onValueChange={changeLanguage}>
        <SelectTrigger
          className={cn(
            "w-[4.5rem] !h-14 rounded-2xl items-center font-light",
            selectClassName,
            iconClassName
          )}>
          <SelectValue placeholder="Рус" />
        </SelectTrigger>
        <SelectContent align="end" className="font-light">
          <SelectItem value="kk">{t("kk")}</SelectItem>
          <SelectItem value="ru">{t("ru")}</SelectItem>
          <SelectItem value="en">{t("en")}</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}

export default LanguageSelector;
