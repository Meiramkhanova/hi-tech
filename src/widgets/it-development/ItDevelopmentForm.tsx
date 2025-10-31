"use client";

import Button from "@/shared/ui/Button";
import { useTranslations } from "next-intl";

function ItDevelopmentForm() {
  const t = useTranslations("Form");

  return (
    <form className="development-form lab-form w-full flex flex-col gap-6 md:gap-8">
      <div className="name-email-tel-wrapper w-full grid grid-cols-1 2xl:grid-cols-3 gap-6 md:gap-8">
        <div className="name-field w-full">
          <input
            placeholder={t("name")}
            className="w-full bg-gray-100 h-14 flex items-center rounded-2xl pl-6 md:pl-8"
          />
        </div>

        <div className="name-field w-full">
          <input
            placeholder="Email"
            className="w-full bg-gray-100 h-14 flex items-center rounded-2xl pl-6 md:pl-8"
          />
        </div>

        <div className="name-field w-full">
          <input
            placeholder={t("telephone")}
            className="w-full bg-gray-100 h-14 flex items-center rounded-2xl pl-6 md:pl-8"
          />
        </div>
      </div>

      <div className="textarea-wrapper">
        <textarea
          name=""
          id=""
          placeholder={t("textareaDesc")}
          className="w-full bg-gray-100 rounded-2xl pl-6 md:pl-8 py-4 min-h-32"
        />
      </div>

      <Button className="w-full sm:w-fit" type="submit">
        {t("discussProject")}
      </Button>
    </form>
  );
}

export default ItDevelopmentForm;
