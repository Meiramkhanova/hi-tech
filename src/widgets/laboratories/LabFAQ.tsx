import Container from "@/shared/ui/Container";
import { Headline } from "@/shared/ui/Headline";
import FAQItem from "./components/FAQItem";
import { getTranslations } from "next-intl/server";

async function LabFAQ() {
  const t = await getTranslations("LaboratoriesPage");

  const faqItems = [
    {
      title: t("faqItem1Title"),
      desc: t("faqItem1Desc"),
    },
    {
      title: t("faqItem2Title"),
      desc: t("faqItem2Desc"),
    },
    {
      title: t("faqItem3Title"),
      desc: t("faqItem3Desc"),
    },
    {
      title: t("faqItem4Title"),
      desc: t("faqItem4Desc"),
    },
  ];

  return (
    <section className="lab-faq">
      <Container>
        <div className="wrapper flex flex-col gap-6 md:gap-8 pt-24">
          <Headline size="sm" as="h5" className="text-gray-400 pb-2 uppercase">
            FAQ
          </Headline>

          <div className="faq-wrapper grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6 md:gap-8">
            {faqItems.map((faqItem, index) => (
              <FAQItem key={index} title={faqItem.title} desc={faqItem.desc} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

export default LabFAQ;
