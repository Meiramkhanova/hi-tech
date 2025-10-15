"use client";

import Container from "@/shared/ui/Container";
import { Headline } from "@/shared/ui/Headline";
import NewsWrapper from "./NewsWrapper";
import Button from "@/shared/ui/Button";
import { useHomePage } from "@/entities/homepage/HomePageClientProvider";
import { useTranslations } from "next-intl";

function News() {
  const data = useHomePage();

  if (!data?.mainNews?.length) return null;

  const t = useTranslations("HomePage");

  return (
    <section className="news">
      <Container>
        <div className="news-wrapper pt-24 flex flex-col gap-6 md:gap-">
          <Headline size="sm" className="text-gray-400 pb-2">
            {t("News.News")}
          </Headline>

          <NewsWrapper mainNews={data?.mainNews} />

          <div className="news-btn-wrapper grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <Button variant="outlined" className="col-start-2">
              {t("News.moreNews")}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default News;
