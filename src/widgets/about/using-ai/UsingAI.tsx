import Analytic from "@/shared/icons/Analytic";
import Progress from "@/shared/icons/Progress";
import SearchMark from "@/shared/icons/SearchMark";
import Task from "@/shared/icons/Task";
import Container from "@/shared/ui/Container";
import { Headline } from "@/shared/ui/Headline";
import { getTranslations } from "next-intl/server";
import AICarousel from "./AICarousel";

async function UsingAI() {
  const t = await getTranslations("AboutPage");

  const aiItems = [
    {
      id: 1,
      title: t("UsingAi.item1Title"),
      desc: t("UsingAi.item1Desc"),
      icon: <Analytic className="size-9 stroke-theprimary" />,
    },
    {
      id: 2,
      title: t("UsingAi.item2Title"),
      desc: t("UsingAi.item2Desc"),
      icon: <Progress className="size-9 stroke-theprimary" />,
    },
    {
      id: 3,
      title: t("UsingAi.item3Title"),
      desc: t("UsingAi.item3Desc"),
      icon: <Task className="size-9 stroke-theprimary" />,
    },
    {
      id: 4,
      title: t("UsingAi.item4Title"),
      desc: t("UsingAi.item4Desc"),
      icon: <SearchMark className="size-9 stroke-theprimary" />,
    },
    // {
    //   id: 5,
    //   title: t("UsingAi.item5Title"),
    //   desc: t("UsingAi.item5Desc"),
    //   icon: <PersonalLearn className="size-9 stroke-theprimary" />,
    // },
    // {
    //   id: 6,
    //   title: t("UsingAi.item6Title"),
    //   desc: t("UsingAi.item6Desc"),
    //   icon: <Speech className="size-9 stroke-theprimary" />,
    // },
    // {
    //   id: 7,
    //   title: t("UsingAi.item7Title"),
    //   desc: t("UsingAi.item7Desc"),
    //   icon: <Chat className="size-9 stroke-theprimary" />,
    // },
  ];

  return (
    <section className="using-ai">
      <Container>
        <div className="using-ai-wrapper flex flex-col gap-6 md:gap-8 pt-24">
          <Headline size="sm" as="h5" className="text-gray-400">
            {t("UsingAi.sectionTitle")}
          </Headline>

          <Headline className="lg:w-1/2">{t("UsingAi.sectionDesc")}</Headline>

          <AICarousel aiItems={aiItems} />
        </div>
      </Container>
    </section>
  );
}

export default UsingAI;
