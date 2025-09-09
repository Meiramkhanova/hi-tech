import BusinessAnalysis from "@/shared/icons/BusinessAnalysis";
import MainSection from "@/shared/ui/MainSection";
import ActivitiesWrapper from "@/widgets/business-analysis/ActivitiesWrapper";
import CenterDepartment from "@/widgets/business-analysis/center-department/CenterDepartment";
import AboutWrapper from "@/widgets/business-analysis/AboutWrapper";

function BusinessAnalysisPage() {
  return (
    <>
      <MainSection
        icon={<BusinessAnalysis />}
        name="Business Analytics & Strategy"
        title="Департамент бизнес-аналитики и стратегического развития"
        image="/assets/slide1.png"
      />

      <AboutWrapper />

      <ActivitiesWrapper />

      <CenterDepartment />
    </>
  );
}

export default BusinessAnalysisPage;
