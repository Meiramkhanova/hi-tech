import Container from "@/shared/ui/Container";
import { Headline } from "@/shared/ui/Headline";
import TechItem from "@/shared/ui/TechItem";
import { getTranslations } from "next-intl/server";

async function LabFormats() {
  const t = await getTranslations("LaboratoriesPage");

  const formats = [
    {
      title: t("formatItem1Title"),
      desc: t("formatItem1Desc"),
      boldText: "",
    },
    {
      title: t("formatItem2Title"),
      desc: t("formatItem2Desc"),
      boldText: t("formatItem2DescBold"),
    },
    {
      title: t("formatItem3Title"),
      desc: t("formatItem3Desc"),
      boldText: t("formatItem3DescBold"),
    },
  ];

  return (
    <section className="lab-formars">
      <Container>
        <div className="wrapper flex flex-col gap-6 md:gap-8 pt-24">
          <Headline size="sm" as="h5" className="text-gray-400 pb-2 ">
            {t("formats")}
          </Headline>

          <div className="formats grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {formats.map((format, index) => (
              <TechItem
                key={index}
                title={format.title}
                desc={format.desc}
                iconOrder={index + 1}
                boldDesc={format.boldText}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

export default LabFormats;
