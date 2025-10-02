import Goal from "@/shared/icons/Goal";
import Mission from "@/shared/icons/Mission";
import Container from "@/shared/ui/Container";
import { Headline } from "@/shared/ui/Headline";
import InfoItem from "@/shared/ui/InfoItem";

const missions = [
  {
    id: 1,
    icon: <Goal className="size-9 stroke-theprimary" />,
    title: "Наши цели",
    desc: "Развитие компетенций специалистов Казахстана и стран Центральной Азии, а также содействие внедрению современных технологий и бизнес- стратегий. Институт предлагает широкий спектр образовательных программ, вебинаров и тренингов, направленных на развитие профессиональных навыков.",
  },
  {
    id: 2,
    icon: <Mission className="size-9 stroke-theprimary" />,
    title: "Наша миссия",
    desc: "Обеспечение качественного обучения и профессионального развития специалистов Казахстана и стран Центральной Азии. Институт призван стать платформой для развития компетенций, необходимых для эффективного внедрения современных технологий, развития бизнес- стратегий и управления рисками в условиях глобальной цифровизации и усиливающейся конкуренции.",
  },
];

function GoalMission() {
  return (
    <section className="goal-mission">
      <Container>
        <div className="goals-wrapper pt-24 flex flex-col gap-6 md:gap-8">
          <Headline size="sm" as="h5" className="text-gray-400 pb-2">
            цели и миссия
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

export default GoalMission;
