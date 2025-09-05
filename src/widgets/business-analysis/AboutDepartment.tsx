import Container from "@/shared/ui/Container";
import { Headline } from "@/shared/ui/Headline";

const descriptions = [
  "Его задача — разрабатывать решения для бизнеса, общества и государства, готовить специалистов, способных анализировать рынки, прогнозировать развитие отраслей и создавать стратегии для компаний и территорий.",
  "Департамент объединяет экспертов в области экономики, отраслевого анализа, транспорта, городской среды, HoReCa и АПК, а также специалистов по искусственному интеллекту и форсайт-исследованиям. Здесь формируются проекты, которые помогают государственным органам и компаниям принимать решения на основе данных и долгосрочных прогнозов.",
  "В рамках департамента работают исследовательские центры и лаборатории, а студенты вовлекаются в реальные проекты: от анализа отраслевых рынков до разработки стратегий развития городов и компаний.",
];

function AboutDepartment() {
  return (
    <section className="about-department">
      <Container>
        <div className="about-wrapper flex flex-col gap-6 md:gap-8 pt-24">
          <Headline size="sm" as="h5" className="text-gray-400 pb-2">
            О департаменте
          </Headline>

          <div className="title-desc grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <Headline>
              Аналитический департамент Hi-Tech Institute — центр исследований и
              стратегической аналитики
            </Headline>

            <div className="description flex flex-col gap-6 md:gap-8 text-gray-400">
              {descriptions.map((description, index) => (
                <p key={index}>{description}</p>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default AboutDepartment;
