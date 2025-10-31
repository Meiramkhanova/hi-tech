"use client";

import Button from "@/shared/ui/Button";
import { useTranslations } from "next-intl";

function ScrollButton() {
  const t = useTranslations("ItDevelopmentPage");

  const handleScroll = () => {
    const el = document.getElementById("cases-section");
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Button onClick={handleScroll} className="w-full sm:w-fit">
      {t("discussProject")}
    </Button>
  );
}

export default ScrollButton;
