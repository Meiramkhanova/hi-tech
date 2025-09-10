import AboutDepartment from "@/shared/ui/AboutDepartment";

const infos = [
  "Департамент развивает школьников через обучение реальным навыкам, востребованным в университетах и на рынке труда. Миссия — подготовить подростков к карьере, предпринимательству sи поступлению в ведущие вузы мира через практико-ориентированные модули и проектное обучение",
];

function AboutWrapper() {
  return (
    <AboutDepartment
      title="Венчурная аналитика и инвестиции в стартапы"
      subtitle="О департаменте"
      infos={infos}
    />
  );
}

export default AboutWrapper;
