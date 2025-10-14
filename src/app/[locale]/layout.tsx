import type { Metadata } from "next";
import "../globals.css";
import Header from "@/widgets/header";
import { Montserrat } from "next/font/google";
import Footer from "@/widgets/footer";
import { cn } from "@/lib/utils";
import HeaderProvider from "@/entities/header/HeaderProvider";
import HomePageProvider from "@/entities/homepage/HomePageProvider";
import { ReactNode } from "react";
import { getMessages } from "next-intl/server";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";

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
  params: Promise<{ locale: "en" | "kk" | "ru" }>;
};

export default async function RootLayout({ children, params }: Props) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html>
      <body className={cn("min-h-screen", montserrat.className)}>
        <NextIntlClientProvider>
          <HeaderProvider>
            <HomePageProvider>
              <Header />
              {children}
              <Footer />
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
