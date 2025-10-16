import TechItem from "@/shared/ui/TechItem";
import { getTranslations } from "next-intl/server";

async function TechItems() {
  const t = await getTranslations("AboutPage");

  const aiTechItems = [
    {
      id: 1,
      title: t("TechInstruments.item1Title"),
      desc: t("TechInstruments.item1Desc"),
    },
    {
      id: 2,
      title: t("TechInstruments.item2Title"),
      desc: t("TechInstruments.item2Desc"),
    },
    {
      id: 3,
      title: t("TechInstruments.item3Title"),
      desc: t("TechInstruments.item3Desc"),
    },
    {
      id: 4,
      title: t("TechInstruments.item4Title"),
      desc: t("TechInstruments.item4Desc"),
    },
  ];

  return (
    <div className="tech-items grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 md:gap-8">
      {aiTechItems.map((aiTechItem) => (
        <TechItem
          key={aiTechItem.id}
          title={aiTechItem.title}
          desc={aiTechItem.desc}
        />
      ))}
    </div>
  );
}

export default TechItems;
