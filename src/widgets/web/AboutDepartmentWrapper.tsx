import AboutDepartment from "@/shared/ui/AboutDepartment";

const infos = [
  "Департамент готовит разработчиков, архитекторов и аналитиков, способных создавать современные цифровые продукты — от веб-приложений до решений на блокчейне. Фокус — практическая разработка, технологические стековые компетенции и работа с передовыми технологиями Web3, dApps и криптопротоколами.",
];

function AboutDepartmentWrapper() {
  return (
    <AboutDepartment
      title="От веб-приложений до смарт-контрактов и DevOps"
      subtitle="О департаменте"
      infos={infos}
    />
  );
}

export default AboutDepartmentWrapper;
