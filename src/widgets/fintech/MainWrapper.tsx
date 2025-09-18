import Bank from "@/shared/icons/Bank";
import MainSection from "@/shared/ui/MainSection";

function MainWrapper() {
  return (
    <MainSection
      tempIcon={<Bank />}
      name="FinTech"
      title="Финансовые технологии, риск-менеджмент и цифровые финансы"
      tempImage="/assets/fintech.png"
    />
  );
}

export default MainWrapper;
