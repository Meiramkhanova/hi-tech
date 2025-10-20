import { getAnalyticsPageData } from "@/entities/analytics-page/analyticsService.service";
import CenterOfAnalytics from "./CenterOfAnalytics";

async function CentersAnalyticsWrapper() {
  const data = await getAnalyticsPageData();

  if (!data || !data?.center_departments || !data?.center_departments.length) {
    return null;
  }

  const analyticsCenters = data?.center_departments;

  return <CenterOfAnalytics center_departments={analyticsCenters} />;
}

export default CentersAnalyticsWrapper;
