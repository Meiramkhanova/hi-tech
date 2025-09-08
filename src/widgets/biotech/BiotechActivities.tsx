import MainActivities from "@/shared/ui/MainActivities";

const activities = [
  {
    title: "Оценка биотехнологических компаний",
    desc: "Бизнес-модели, рынок, клинические стадии.",
  },
  {
    title: "Финансовое моделирование в биотехе",
    desc: "Valuation с учётом рисков и регуляторов.",
  },
  {
    title: "Анализ биомедицинских данных",
    desc: "Машинное обучение, публикации, патенты.",
  },
  {
    title: "Аналитика лекарственных разработок",
    desc: "Технологические тренды, прогноз успеха.",
  },
  {
    title: "Поддержка инвестиций",
    desc: "Дашборды, due diligence, разведка.",
  },
];

function BiotechActivities() {
  return (
    <MainActivities
      title="Основные направления деятельности"
      activities={activities}
    />
  );
}

export default BiotechActivities;
