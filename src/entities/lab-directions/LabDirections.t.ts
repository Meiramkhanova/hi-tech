import { LabItem } from "../lab-items/LabItems.t";
import { Meta, StrapiBaseLocale } from "../types";

export interface LabDirection extends StrapiBaseLocale {
  title: string;
  lab_items: LabItem[];
}

export interface LabDirectionsResponse {
  data: LabDirection[];
  meta: Meta;
}
