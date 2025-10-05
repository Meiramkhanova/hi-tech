import Container from "@/shared/ui/Container";
import { Headline } from "@/shared/ui/Headline";
import FAQItem from "./components/FAQItem";

const faqItems = [
  {
    title: "Нужен ли опыт?",
    desc: "Нет, главное — мотивация и готовность учиться.",
  },
  {
    title: "Сколько времени займёт обучение?",
    desc: "В среднем 5–8 часов в неделю.",
  },
  {
    title: "Можно участвовать в нескольких лабораториях?",
    desc: "Да, но придётся проходить отбор в каждую.",
  },
  {
    title: "Что будет на выходе?",
    desc: "Портфолио проектов, реальные навыки, сертификат.",
  },
];

function LabFAQ() {
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
