"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
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

  const changeLanguage = (locale: string) => {
    const currentLocale = pathname.split("/")[1];

    const pathWithoutLocale = locales.includes(currentLocale)
      ? pathname.replace(`/${currentLocale}`, "")
      : pathname;

    router.push(`/${locale}${pathWithoutLocale}`);
  };

  return (
    <div className={cn("lg-switcher", className)}>
      <Select onValueChange={changeLanguage}>
        <SelectTrigger
          className={cn(
            "w-[4.5rem] !h-14 rounded-2xl items-center font-light",
            selectClassName,
            iconClassName
          )}>
          <SelectValue placeholder="Рус" />
        </SelectTrigger>
        <SelectContent align="end" className="font-light">
          <SelectItem value="kk">Кз</SelectItem>
          <SelectItem value="ru">Рус</SelectItem>
          <SelectItem value="en">Англ</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}

export default LanguageSelector;
