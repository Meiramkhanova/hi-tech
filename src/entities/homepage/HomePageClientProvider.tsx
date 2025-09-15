"use client";

import { createContext, ReactNode, useContext } from "react";
import { HomePageData } from "./getHomepage.t";

const HeaderContext = createContext<HomePageData | null>(null);

export const useHomePage = () => useContext(HeaderContext);

interface HomePageResponseProps {
  children: ReactNode;
  value: HomePageData | null;
}

function HomePageClientProvider({ children, value }: HomePageResponseProps) {
  return (
    <HeaderContext.Provider value={value}>{children}</HeaderContext.Provider>
  );
}

export default HomePageClientProvider;
