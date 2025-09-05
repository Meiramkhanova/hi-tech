import TechItem from "@/shared/ui/TechItem";

const aiTechItems = [
  {
    id: 1,
    title: "Аналитика и данные",
    desc: "Python, Excel, Power BI, Qlik, Kaggle",
  },
  {
    id: 2,
    title: "ИИ-инструменты",
    desc: "ChatGPT, Gemini, Cursor",
  },
  {
    id: 3,
    title: "Совместная работа",
    desc: "Slack, Trello, Zoom",
  },
  {
    id: 4,
    title: "Разработка",
    desc: "GitHub",
  },
];

function TechItems() {
  return (
    <div className="tech-items grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 md:gap-8">
      {aiTechItems.map((aiTechItem) => (
        <TechItem
          key={aiTechItem.id}
          title={aiTechItem.title}
          desc={aiTechItem.desc}
        />
      ))}
    </div>
  );
}

export default TechItems;
