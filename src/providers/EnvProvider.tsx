"use client";

import { createContext, useContext, ReactNode } from "react";

type EnvValues = {
  backendUrl: string;
  mediaUrl: string;
};

const EnvContext = createContext<EnvValues>({
  backendUrl: "",
  mediaUrl: "",
});

export const useEnv = () => useContext(EnvContext);

type EnvProviderProps = EnvValues & {
  children: ReactNode;
};

export default function EnvProvider({
  backendUrl,
  mediaUrl,
  children,
}: EnvProviderProps) {
  return (
    <EnvContext.Provider value={{ backendUrl, mediaUrl }}>
      {children}
    </EnvContext.Provider>
  );
}
