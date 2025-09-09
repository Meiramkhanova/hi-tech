import MainActivities from "@/shared/ui/MainActivities";

const activities = [
  {
    title: "Прикладной AI и ML",
    desc: "NLP, CV, time series, генеративный ИИ.",
  },
  {
    title: "Data Science для отраслей",
    desc: "Финансы, образование, медицина, города.",
  },
  {
    title: "Аналитическая инженерия",
    desc: "Пайплайны, дашборды, рекомендательные системы.",
  },
  {
    title: "AI + Человеческий капитал",
    desc: "Навыки промптинга, no-code/low-code автоматизация.",
  },
  {
    title: "Исследования и стартапы",
    desc: "Explainable AI, Kaggle-проекты, работа с реальными данными.",
  },
];

function AIActivities() {
  return (
    <MainActivities
      title="Основные направления деятельности"
      activities={activities}
    />
  );
}

export default AIActivities;
