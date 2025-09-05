import TitleInfo from "@/shared/ui/TitleInfo";

const aboutTitleInfo = {
  title:
    "18 лет опыта, исследований и практики, ставших основой нашей концепции",
  descriptions: [
    "За 18 лет Hi-Tech Institute прошёл путь от научного семинара до международного центра с программами, лабораториями и стартапами. Сегодня мы строим обучение на проектной работе и тесной связи с индустрией.",
    "Наша модель опирается на три идеи: практика и реальные проекты, внедрение инноваций и технологий на базе искусственного интеллекта и data science, а также формирование интеллектуального сообщества студентов, экспертов и исследователей.",
  ],
};

function TitleInfoWrapper() {
  return (
    <TitleInfo
      title={aboutTitleInfo.title}
      descriptions={aboutTitleInfo.descriptions}
    />
  );
}

export default TitleInfoWrapper;
