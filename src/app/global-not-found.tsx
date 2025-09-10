import "./globals.css";
import Footer from "@/widgets/footer";
import Header from "@/widgets/header";
import { Metadata } from "next";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin", "latin-ext", "cyrillic", "cyrillic-ext"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "404 - Page Not Found",
  description: "The page you are looking for does not exist.",
};

function GlobalNotFound() {
  return (
    <html lang="en" className={montserrat.className}>
      <body>
        <Header />

        <div className="not-found-wrapper h-[calc(100vh-80px)] flex flex-col items-center justify-center gap-6 md:gap-8">
          <div className="error-status text-8xl text-theprimary">404</div>

          <div className="error-desc text-4xl text-theprimary uppercase">
            Страница не найдена
          </div>

          <div className="text-gray-400 max-w-[30rem] text-center">
            Возможно, ссылка устарела или введена неверно. Попробуйте вернуться
            на главную страницу или воспользуйтесь навигацией.
          </div>
        </div>

        <Footer />
      </body>
    </html>
  );
}

export default GlobalNotFound;
