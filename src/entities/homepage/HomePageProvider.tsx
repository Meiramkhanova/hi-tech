import { ReactNode } from "react";
import { HomePageData } from "./getHomepage.t";
import { getHomePageData } from "./HomePage.service";
import HomePageClientProvider from "./HomePageClientProvider";

export const revalidate = 0;

async function HomePageProvider({ children }: { children: ReactNode }) {
  console.log("API URL being used:", process.env.NEXT_PUBLIC_API_URL);

  const data: HomePageData | null = await getHomePageData();

  console.log("Data fetched:", data);

  return (
    <HomePageClientProvider value={data}>{children}</HomePageClientProvider>
  );
}

export default HomePageProvider;
