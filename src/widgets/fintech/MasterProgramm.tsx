import Button from "@/shared/ui/Button";
import Container from "@/shared/ui/Container";
import { Headline } from "@/shared/ui/Headline";

function MasterProgramm() {
  return (
    <section className="master-programm">
      <div className="outer-wrapper bg-theprimary py-8 mb-24 rounded-2xl">
        <Container>
          <div className="wrapper flex flex-col gap-12 md:gap-16 text-white">
            <Headline size="sm" as="h5" className="pb-2">
              Магистерская программа
            </Headline>

            <div className="title-info grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
              <Headline>MSc in Quantitative Finance</Headline>

              <div className="info-btns flex flex-col gap-24 justify-between">
                <div className="info-desc">
                  Программа направлена на подготовку специалистов с глубокими
                  знаниями в области количественного анализа, моделирования
                  финансовых процессов и оценки рисков. Студенты осваивают
                  современные методы статистики, машинного обучения и
                  математического моделирования для работы в инвестиционных
                  компаниях, банках и финтех-стартапах.
                </div>

                <div className="btns flex flex-col md:flex-row md:items-center gap-4">
                  <Button className="w-full md:w-fit">Поступить</Button>

                  <Button className="w-full md:w-fit" variant="secondary">
                    Подробнее о программе
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}

export default MasterProgramm;
