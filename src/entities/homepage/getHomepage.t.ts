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
}

export interface MainNewsComponent {
  __component: "sections.main-news";
  id: number;
  createdTime: string;
  newsTitle: string;
  newsDesc: string;
  newsImage: StrapiImage;
}

export interface HomePageData extends StrapiBaseLocale {
  swiper: MainSwiper[];
  about: AboutSection[];
  aboutinfos: AboutInfo[];
  mainNews: MainNewsComponent[];
}

export interface HomePageResponse {
  data: HomePageData;
  meta: Record<string, unknown>;
}
