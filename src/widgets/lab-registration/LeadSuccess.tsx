import { cn } from "@/lib/utils";
import Telegram from "@/shared/icons/Telegram";
import { Headline } from "@/shared/ui/Headline";
import { Instagram } from "lucide-react";
import { useTranslations } from "next-intl";

function LeadSuccess() {
  const t = useTranslations("LabRegistrsationForm");

  return (
    <div className="lead-success flex flex-col gap-24 pt-16">
      <div className="titles-wrapper flex flex-col">
        <Headline className="uppercase">
          {t("LeadSuccess.thanksForRequest")}
        </Headline>

        <Headline className="text-gray-400 uppercase">
          {t("LeadSuccess.callLater")}
        </Headline>
      </div>

      <div className="desc-socials flex flex-col gap-4">
        <div className="desc text-gray-400">{t("LeadSuccess.doNotMiss")}</div>

        <div className="social-btns flex items-center gap-2">
          <a
            href="#"
            rel="noopener noreferrer"
            className={cn(
              "size-14 flex shrink-0 items-center justify-center bg-thesecondary rounded-2xl hover:brightness-110",
              "transition-all ease-in-out duration-300"
            )}>
            <Telegram className="text-white size-5" />
          </a>

          <a
            href="https://www.instagram.com/hti_kz/"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "size-14 flex shrink-0 items-center justify-center bg-thesecondary rounded-2xl hover:brightness-110",
              "transition-all ease-in-out duration-300"
            )}>
            <Instagram className="size-6 text-white" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default LeadSuccess;
