import Container from "@/shared/ui/Container";
import { Headline } from "@/shared/ui/Headline";
import ScrollButton from "../it-development/components/ScrollButton";
import { getTranslations } from "next-intl/server";
import TechItem from "@/shared/ui/TechItem";

async function MainSectionCareer() {
  const t = await getTranslations("CareerCenterPage");

  const items = [
    {
      title: t("infoItem1Title"),
      desc: t("infoItem1Desc"),
    },
    {
      title: t("infoItem2Title"),
      desc: t("infoItem2Desc"),
    },
    {
      title: t("infoItem3Title"),
      desc: t("infoItem3Desc"),
    },
    {
      title: t("infoItem4Title"),
      desc: t("infoItem4Desc"),
    },
  ];

  return (
    <section className="it-development-info">
      <Container>
        <div className="wrapper py-24 flex flex-col gap-16">
          <div className="main-section-title-desc grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <Headline>{t("sectionTitle")}</Headline>

            <div className="desc-btn flex flex-col gap-6 md:gap-8">
              <div className="desc text-gray-400">{t("sectionDesc")}</div>

              <ScrollButton elId="career" />
            </div>
          </div>

          <div className="info-items grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {items.map((item, index) => (
              <TechItem
                key={index}
                title={item.title}
                desc={item.desc}
                className="2xl:grid-cols-2"
                descClassName="line-clamp-none"
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

export default MainSectionCareer;
