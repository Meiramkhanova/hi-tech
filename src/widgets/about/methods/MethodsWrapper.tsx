import AboutInfoItem from "@/shared/ui/AboutInfoItem";
import { getTranslations } from "next-intl/server";

export default async function MethodsWrapper() {
  const t = await getTranslations("AboutPage");

  const methods = [
    {
      id: 1,
      iconText: "1",
      title: t("PracticeAndMethods.item1Title"),
      desc: t("PracticeAndMethods.item1Desc"),
    },
    {
      id: 2,
      iconText: "2",
      title: t("PracticeAndMethods.item2Title"),
      desc: t("PracticeAndMethods.item2Desc"),
    },
    {
      id: 3,
      iconText: "3",
      title: t("PracticeAndMethods.item3Title"),
      desc: t("PracticeAndMethods.item3Desc"),
    },
    {
      id: 4,
      iconText: "4",
      title: t("PracticeAndMethods.item4Title"),
      desc: t("PracticeAndMethods.item4Desc"),
    },
    {
      id: 5,
      iconText: "5",
      title: t("PracticeAndMethods.item5Title"),
      desc: t("PracticeAndMethods.item5Desc"),
    },
  ];

  return (
    <div className="methods-wrapper grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 md:[&>*:last-child]:col-start-2">
      {methods.map((method) => (
        <AboutInfoItem
          key={method.id}
          title={method.title}
          iconText={method.iconText}
          desc={method.desc}
        />
      ))}
    </div>
  );
}
