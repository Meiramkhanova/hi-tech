import Goal from "@/shared/icons/Goal";
import Mission from "@/shared/icons/Mission";
import Container from "@/shared/ui/Container";
import { Headline } from "@/shared/ui/Headline";
import InfoItem from "@/shared/ui/InfoItem";
import { getTranslations } from "next-intl/server";

export default async function GoalMission() {
  const t = await getTranslations("AboutPage");

  const missions = [
    {
      id: 1,
      icon: <Goal className="size-9 stroke-theprimary" />,
      title: t("GoalAndMissions.ourGoals"),
      desc: t("GoalAndMissions.ourGoalsDesc"),
    },
    {
      id: 2,
      icon: <Mission className="size-9 stroke-theprimary" />,
      title: t("GoalAndMissions.ourMissions"),
      desc: t("GoalAndMissions.ourMissionsDesc"),
    },
  ];

  return (
    <section className="goal-mission">
      <Container>
        <div className="goals-wrapper pt-24 flex flex-col gap-6 md:gap-8">
          <Headline size="sm" as="h5" className="text-gray-400 pb-2">
            {t("GoalAndMissions.sectionTitle")}
          </Headline>

          <div className="goals-infos grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {missions.map((mission) => (
              <InfoItem
                key={mission.id}
                title={mission.title}
                desc={mission.desc}
                localIcon={mission.icon}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
