"use client";

import { createContext, ReactNode, useContext } from "react";
import { HeaderData } from "./getHeader.t";

const HeaderContext = createContext<HeaderData[] | null>(null);

export const useHeader = () => useContext(HeaderContext);

interface HeaderResponseProps {
  children: ReactNode;
  value: HeaderData[];
}

function HeaderClientProvider({ children, value }: HeaderResponseProps) {
  return (
    <HeaderContext.Provider value={value}>{children}</HeaderContext.Provider>
  );
}

export default HeaderClientProvider;
