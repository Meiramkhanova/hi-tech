import { ReactNode } from "react";
import { HomePageData } from "./getHomepage.t";
import { getHomePageData } from "./HomePage.service";
import HomePageClientProvider from "./HomePageClientProvider";

export const revalidate = 0;

async function HomePageProvider({ children }: { children: ReactNode }) {
  const data: HomePageData | null = await getHomePageData();

  return (
    <HomePageClientProvider value={data}>{children}</HomePageClientProvider>
  );
}

export default HomePageProvider;
