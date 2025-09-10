import MainActivities from "@/shared/ui/MainActivities";

const activities = [
  {
    title: "Оценка стартапов и сделок",
    desc: "Финансовое моделирование, TAM/SAM/SOM, анализ команд и продуктов.",
  },
  {
    title: "Венчурная аналитика и due diligence",
    desc: "Подготовка к инвестиционным комитетам, анализ рисков, юр и финпроверка.",
  },
  {
    title: "Портфельное мышление",
    desc: "Управление стадиями, exit-стратегии, реструктуризация долей.",
  },
  {
    title: "Инвестиции в технологии",
    desc: "Web3, AI, EdTech, HealthTech, FinTech.",
  },
  {
    title: "Работа с основателями",
    desc: "сопровождение команд от pre-seed до Series A",
  },
];

function DepartmentActivities() {
  return (
    <MainActivities
      title="Основные направления деятельности"
      activities={activities}
    />
  );
}

export default DepartmentActivities;
