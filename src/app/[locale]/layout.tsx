import type { Metadata } from "next";
import "../globals.css";
import Header from "@/widgets/header";
import { Montserrat } from "next/font/google";
import Footer from "@/widgets/footer";
import { cn } from "@/lib/utils";
import HeaderProvider from "@/entities/header/HeaderProvider";
import HomePageProvider from "@/entities/homepage/HomePageProvider";
import { ReactNode } from "react";
import { NextIntlClientProvider } from "next-intl";
import AdminHotkeyHandler from "@/components/AdminHotkeyHandler";
import EditorPen from "@/widgets/header/EditorPen";
import EnvProvider from "@/providers/EnvProvider";

const montserrat = Montserrat({
  subsets: ["latin", "latin-ext", "cyrillic", "cyrillic-ext"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "hti",
  description: "hi-tech institute",
};

type Props = {
  children: ReactNode;
};

export default async function RootLayout({ children }: Props) {
  const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL ?? "";
  const backendHost = process.env.NEXT_PUBLIC_BACKEND_HOST ?? "";
  const backendPort = process.env.NEXT_PUBLIC_BACKEND_PORT ?? "";

  const isDev = process.env.NODE_ENV === "development";

  const mediaUrl = isDev
    ? `http://${backendHost}:${backendPort}`
    : `https://${backendHost}`;

  return (
    <html>
      <body className={cn("min-h-screen", montserrat.className)}>
        <NextIntlClientProvider>
          <HeaderProvider>
            <HomePageProvider>
              <EnvProvider backendUrl={backendUrl} mediaUrl={mediaUrl}>
                <AdminHotkeyHandler />

                <EditorPen />

                <Header />
                {children}
                <Footer />
              </EnvProvider>
            </HomePageProvider>
          </HeaderProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

export async function generateStaticParams() {
  return [{ locale: "en" }, { locale: "ru" }, { locale: "kk" }];
}
