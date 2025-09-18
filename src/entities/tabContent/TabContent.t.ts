import { Meta, StrapiBase, StrapiIcon } from "../types";

export interface TabMainSection {
  __component?: string;
  id?: number;
  name: string;
  title: string;
  icon?: StrapiIcon[];
  image?: StrapiIcon;
}

interface DataItem extends StrapiBase {
  sections: TabMainSection[];
}

export interface TabResponse {
  data: DataItem[];
  meta: Meta;
}
