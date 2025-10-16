import AboutInfoItem from "@/shared/ui/AboutInfoItem";
import { getTranslations } from "next-intl/server";

export default async function DirectionsWrapper() {
  const t = await getTranslations("AboutPage");

  const directions = [
    {
      id: 1,
      iconText: "50%",
      title: t("Approach.item1Title"),
      desc: t("Approach.item1Desc"),
    },
    {
      id: 2,
      iconText: "30%",
      title: t("Approach.item2Title"),
      desc: t("Approach.item2Desc"),
    },
    {
      id: 3,
      iconText: "20%",
      title: t("Approach.item3Title"),
      desc: t("Approach.item3Desc"),
    },
  ];

  return (
    <div className="directions-wrapper grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 md:[&>*:last-child]:col-start-2">
      {directions.map((direction, i) => (
        <AboutInfoItem
          key={direction.id}
          aboutInfo={direction.title}
          iconText={direction.iconText}
          desc={direction.desc}
          className={i === directions.length - 1 ? "rtl" : ""}
        />
      ))}
    </div>
  );
}
