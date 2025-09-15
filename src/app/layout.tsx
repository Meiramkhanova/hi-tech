import type { Metadata } from "next";
import "./globals.css";
import Header from "@/widgets/header";
import { Montserrat } from "next/font/google";
import Footer from "@/widgets/footer";
import { cn } from "@/lib/utils";
import HeaderProvider from "@/entities/header/HeaderProvider";
import HomePageProvider from "@/entities/homepage/HomePageProvider";

const montserrat = Montserrat({
  subsets: ["latin", "latin-ext", "cyrillic", "cyrillic-ext"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "hti",
  description: "hi-tech institute",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("min-h-screen", montserrat.className)}>
        <HeaderProvider>
          <HomePageProvider>
            <Header />
            {children}
            <Footer />
          </HomePageProvider>
        </HeaderProvider>
      </body>
    </html>
  );
}
