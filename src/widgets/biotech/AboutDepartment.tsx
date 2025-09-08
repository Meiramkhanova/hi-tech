import Container from "@/shared/ui/Container";
import { Headline } from "@/shared/ui/Headline";

function AboutDepartment() {
  return (
    <section className="about-department">
      <Container>
        <div className="wrapper flex flex-col gap-6 md:gap-8 pt-24">
          <Headline size="sm" as="h5" className="text-gray-400 pb-2">
            О департаменте
          </Headline>

          <div className="title-desc grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <Headline>
              Департамент биотехнологий — аналитика, моделирование и оценка
              компаний и технологий
            </Headline>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default AboutDepartment;
