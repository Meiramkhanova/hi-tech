import { ReactNode } from "react";
import HeaderClientProvider from "./HeaderClientProvider";
import { getHeaderData } from "./headerService.service";
import { HeaderData } from "./getHeader.t";

async function HeaderProvider({ children }: { children: ReactNode }) {
  const data: HeaderData[] = await getHeaderData();

  return <HeaderClientProvider value={data}>{children}</HeaderClientProvider>;
}

export default HeaderProvider;
