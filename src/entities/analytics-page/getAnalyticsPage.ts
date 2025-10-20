import { CentersOfDepartmentItem } from "../tabContent/TabContent.t";
import { StrapiBaseLocale } from "../types";

export interface AnalyticsPageData extends StrapiBaseLocale {
  center_departments: CentersOfDepartmentItem[];
}

export interface AnalyticsPageResponse {
  data: AnalyticsPageData;
  meta: Record<string, unknown>;
}
