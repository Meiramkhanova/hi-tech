import MainActivities from "@/shared/ui/MainActivities";
import { getTranslations } from "next-intl/server";

async function MainActivitiesWrapper() {
  const t = await getTranslations("Analytics");

  const activities = [
    {
      id: 1,
      title: t("mainActivities.title1"),
      desc: t("mainActivities.desc1"),
    },
    {
      id: 2,
      title: t("mainActivities.title2"),
      desc: t("mainActivities.desc2"),
    },
    {
      id: 3,
      title: t("mainActivities.title3"),
      desc: t("mainActivities.desc3"),
    },
    {
      id: 4,
      title: t("mainActivities.title4"),
      desc: t("mainActivities.desc4"),
    },
    {
      id: 5,
      title: t("mainActivities.title5"),
      desc: t("mainActivities.desc5"),
    },
    {
      id: 6,
      title: t("mainActivities.title6"),
      desc: t("mainActivities.desc6"),
    },
  ];

  return <MainActivities activityItems={activities} />;
}

export default MainActivitiesWrapper;
