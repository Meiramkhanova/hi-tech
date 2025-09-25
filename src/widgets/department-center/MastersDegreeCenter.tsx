import { MastersDegreeOfCenter } from "@/entities/department-center/DepartmentCenter.t";
import Button from "@/shared/ui/Button";
import Container from "@/shared/ui/Container";
import { Headline } from "@/shared/ui/Headline";

function MastersDegreeCenter({ title, desc }: MastersDegreeOfCenter) {
  return (
    <section className="masters-degree-of-center">
      <div className="outer-wrapper pt-24">
        <div className="wrapper bg-theprimary text-white p-6 md:p-8 rounded-2xl">
          <Container>
            <div className="inner-wrapper flex flex-col gap-12">
              <div className="masters-center text-base uppercase tracking-wider">
                Магистерская программа центра
              </div>

              <div className="title-desc w-full grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
                <Headline>{title}</Headline>

                <div className="desc-btn flex flex-col gap-20">
                  <div className="desc">{desc}</div>

                  <Button>Регистрация</Button>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </section>
  );
}

export default MastersDegreeCenter;
