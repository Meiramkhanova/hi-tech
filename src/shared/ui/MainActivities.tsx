import { MainAreasActivity } from "@/entities/tabContent/TabContent.t";
import Container from "@/shared/ui/Container";
import { Headline } from "@/shared/ui/Headline";
import TechItem from "@/shared/ui/TechItem";
import { getTranslations } from "next-intl/server";

async function MainActivities({
  activityItems,
}: Pick<MainAreasActivity, "activityItems"> & { departmentSlug?: string }) {
  const t = await getTranslations("slugPage");

  return (
    <section className="main-activities">
      <Container>
        <div className="activities-wrapper flex flex-col gap-6 md:gap-8 pt-24">
          <Headline size="sm" as="h5" className="text-gray-400 pb-2 ">
            {t("mainActivityDirections")}
          </Headline>

          <div className="activities grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {activityItems.map((activity, index) => (
              <TechItem
                key={`activity-${activity.id}-${index}`}
                title={activity.title}
                desc={activity.desc}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

export default MainActivities;
