import AnalytycsMainSection from "@/widgets/analytics/AnalytycsMainSection";
import CentersAnalyticsWrapper from "@/widgets/analytics/CentersAnalyticsWrapper";
import MainActivitiesWrapper from "@/widgets/analytics/MainActivitiesWrapper";

function AnalyticsPage() {
  return (
    <>
      <AnalytycsMainSection />

      <MainActivitiesWrapper />

      <CentersAnalyticsWrapper />
    </>
  );
}

export default AnalyticsPage;
