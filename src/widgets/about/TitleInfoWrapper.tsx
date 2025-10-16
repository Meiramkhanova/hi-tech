import TitleInfo from "@/shared/ui/TitleInfo";
import { getTranslations } from "next-intl/server";

export default async function TitleInfoWrapper() {
  const t = await getTranslations("AboutPage");

  const aboutTitleInfo = {
    title: t("AboutInfo.sectionTitle"),
    descriptions: [
      t("AboutInfo.sectionDesc.desc1"),
      t("AboutInfo.sectionDesc.desc2"),
    ],
  };

  return (
    <TitleInfo
      title={aboutTitleInfo.title}
      descriptions={aboutTitleInfo.descriptions}
    />
  );
}
