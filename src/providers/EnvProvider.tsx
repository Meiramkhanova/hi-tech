"use client";

import { createContext, useContext, ReactNode } from "react";

type EnvContextType = {
  backendUrl: string;
};

const EnvContext = createContext<EnvContextType>({
  backendUrl: "",
});

export const useEnv = (): EnvContextType => useContext(EnvContext);

type EnvProviderProps = {
  backendUrl: string;
  children: ReactNode;
};

export default function EnvProvider({
  backendUrl,
  children,
}: EnvProviderProps) {
  return (
    <EnvContext.Provider value={{ backendUrl }}>{children}</EnvContext.Provider>
  );
}
