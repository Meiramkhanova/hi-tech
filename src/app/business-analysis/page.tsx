import BusinessAnalysis from "@/shared/icons/BusinessAnalysis";
import MainSection from "@/shared/ui/MainSection";
import AboutDepartment from "@/widgets/business-analysis/AboutDepartment";
import ActivitiesWrapper from "@/widgets/business-analysis/ActivitiesWrapper";
import CenterDepartment from "@/widgets/business-analysis/center-department/CenterDepartment";

function BusinessAnalysisPage() {
  return (
    <>
      <MainSection
        icon={<BusinessAnalysis />}
        name="Business Analytics & Strategy"
        title="Департамент бизнес-аналитики и стратегического развития"
        image="/assets/slide1.png"
      />

      <AboutDepartment />

      <ActivitiesWrapper />

      <CenterDepartment />
    </>
  );
}

export default BusinessAnalysisPage;
