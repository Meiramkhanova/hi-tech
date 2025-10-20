"use client";

import Container from "@/shared/ui/Container";
import { Headline } from "@/shared/ui/Headline";
import Carousel from "./Carousel";
import { useHomePage } from "@/entities/homepage/HomePageClientProvider";
import { useTranslations } from "next-intl";

function DirectionActivity() {
  const data = useHomePage();

  const t = useTranslations("HomePage");

  if (!data?.tabs?.length) return null;

  return (
    <section className="direction-activity">
      <Container>
        <div className="activities-wrapper pt-24 flex flex-col gap-6 md:gap-8">
          <Headline as="h5" size="sm" className="text-gray-400 pb-2">
            {t("DirectionActivity.sectionTitle")}
          </Headline>

          <Carousel tabsData={data.tabs} />
        </div>
      </Container>
    </section>
  );
}

export default DirectionActivity;
