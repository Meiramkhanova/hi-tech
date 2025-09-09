import Bank from "@/shared/icons/Bank";
import MainSection from "@/shared/ui/MainSection";

function MainWrapper() {
  return (
    <MainSection
      icon={<Bank />}
      name="FinTech"
      title="Финансовые технологии, риск-менеджмент и цифровые финансы"
      image="/assets/fintech.png"
    />
  );
}

export default MainWrapper;
