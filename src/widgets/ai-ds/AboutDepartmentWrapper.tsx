import AboutDepartment from "@/shared/ui/AboutDepartment";

const infos = [
  "Департамент занимается разработкой и внедрением прикладных AI и аналитических решений в бизнесе, образовании, науке и государственном управлении. Основной фокус — подготовка специалистов нового поколения, генерация собственных AI-проектов и сопровождение цифровой трансформации через технологии машинного обучения и анализа данных.",
];

function AboutDepartmentWrapper() {
  return (
    <AboutDepartment
      title="Департамент FinTech — цифровые финансы, количественные методы и риск-менеджмент"
      subtitle="О департаменте"
      infos={infos}
    />
  );
}

export default AboutDepartmentWrapper;
