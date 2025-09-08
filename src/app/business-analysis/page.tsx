import MainSection from "@/shared/ui/MainSection";
import AboutDepartment from "@/widgets/business-analysis/AboutDepartment";
import CenterDepartment from "@/widgets/business-analysis/center-department/CenterDepartment";
import MainActivities from "@/widgets/business-analysis/MainActivities";

function BusinessAnalysisPage() {
  return (
    <>
      <MainSection />

      <AboutDepartment />

      <MainActivities />

      <CenterDepartment />
    </>
  );
}

export default BusinessAnalysisPage;
