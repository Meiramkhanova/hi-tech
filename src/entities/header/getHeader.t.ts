import { StrapiBase } from "../types";

export interface HeaderData extends StrapiBase {
  text: string;
  url: string;
}

export interface Pagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}

export interface Meta {
  pagination: Pagination;
}

export interface HeaderResponse {
  data: HeaderData[];
  meta: Meta;
}
