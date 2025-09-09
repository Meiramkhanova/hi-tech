import MainActivities from "@/shared/ui/MainActivities";

const activities = [
  {
    title: "Разработка IT-продуктов",
    desc: "Full-stack, backend, MVP, сервисы и интерфейсы.",
  },
  {
    title: "Блокчейн и Web3",
    desc: "Смарт-контракты, DeFi, NFT, dApps.",
  },
  {
    title: "Архитектура и DevOps",
    desc: "CI/CD, облака, микросервисы, Docker.",
  },
  {
    title: "Код как актив",
    desc: "Портфолио, GitHub, open source, хакатоны.",
  },
  {
    title: "Образование через практику",
    desc: "стартап-треки от идеи до продукта.",
  },
];

function WebActivities() {
  return (
    <MainActivities
      title="Основные направления деятельности"
      activities={activities}
    />
  );
}

export default WebActivities;
