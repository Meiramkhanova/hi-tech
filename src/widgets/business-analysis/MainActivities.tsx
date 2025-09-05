import Container from "@/shared/ui/Container";
import { Headline } from "@/shared/ui/Headline";
import TechItem from "@/shared/ui/TechItem";

const activities = [
  {
    title: "Секторный и макроэкономический анализ",
    desc: "Ключевые отрасли, регионы, тренды.",
  },
  {
    title: "Инвестиционная аналитика и стратегическое планирование",
    desc: "Сценарии развития, оценка проектов.",
  },
  {
    title: "Исследования в образовании и человеческом капитале",
    desc: "Мониторинг систем, прогноз кадров.",
  },
  {
    title: "Разработка гос и промполитики",
    desc: "Поддержка органов власти и реформ.",
  },
  {
    title: "Аналитика науки и технологий",
    desc: "Технологическая активность, цифровизация, AI.",
  },
  {
    title: "Консалтинг для бизнеса и госструктур",
    desc: "Обзоры, экспертиза, тендеры.",
  },
];

function MainActivities() {
  return (
    <section className="main-activities">
      <Container>
        <div className="activities-wrapper flex flex-col gap-6 md:gap-8 pt-24">
          <Headline size="sm" as="h5" className="text-gray-400 pb-2">
            Основные направления деятельности
          </Headline>

          <div className="activities grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {activities.map((activity, index) => (
              <TechItem
                key={index}
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
