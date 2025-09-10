import AboutDepartment from "@/shared/ui/AboutDepartment";

const infos = [
  "Департамент готовит новое поколение инвесторов, аналитиков и основателей стартапов, способных работать в венчурной экосистеме. Фокус — инвестиционная аналитика, due diligence, портфельное мышление и работа с инновационными компаниями.",
];

function AboutDepartmentWrapper() {
  return (
    <AboutDepartment
      title="Венчурная аналитика и инвестиции в стартапы"
      subtitle="О департаменте"
      infos={infos}
    />
  );
}

export default AboutDepartmentWrapper;
