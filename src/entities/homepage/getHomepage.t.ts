import { StrapiBase, StrapiBaseLocale, StrapiImage } from "../types";

export interface MainSwiper {
  __component: "components.main-swiper";
  id: number;
  name: string;
  desc: string;
  image: StrapiImage;
}

export interface AboutSection {
  __component: "sections.about";
  id: number;
  title: string;
  desc: string;
  images: StrapiImage[];
}

export interface AboutInfo extends StrapiBase {
  svgImage: StrapiImage;
  title: string;
}

export interface MainNewsComponent {
  __component: "sections.main-news";
  id: number;
  createdTime: string;
  newsTitle: string;
  newsDesc: string;
  newsImage: StrapiImage;
}

export interface Icon {
  id: number;
  documentId: string;
  name: string;
  alternativeText: string | null;
  caption: string | null;
  width: number;
  height: number;
  formats: Record<string, unknown> | null;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: string | null;
  provider: string;
  provider_metadata: Record<string, unknown> | null;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface StrapiTabContent extends StrapiBase {
  title: string;
  desc: string;
  slug: string;
  icon: Icon;
}

export interface StrapiTab extends StrapiBaseLocale {
  title: string;
  slug: string;
  tab_contents: StrapiTabContent[];
}

export interface HomePageData extends StrapiBaseLocale {
  swiper: MainSwiper[];
  about: AboutSection[];
  aboutinfos: AboutInfo[];
  mainNews: MainNewsComponent[];
  tabs: StrapiTab[];
}

export interface HomePageResponse {
  data: HomePageData;
  meta: Record<string, unknown>;
}
