import { AboutDepartmentCenter } from "@/entities/department-center/DepartmentCenter.t";
import Container from "@/shared/ui/Container";
import { Headline } from "@/shared/ui/Headline";

function AboutCenter({ title, desc }: AboutDepartmentCenter) {
  return (
    <section className="department-center-about">
      <Container>
        <div className="wrapper flex flex-col gap-6 md:gap-8 pt-24">
          <Headline size="sm" as="h5" className="text-gray-400 pb-2 ">
            О центре
          </Headline>

          <div className="about-title-desc grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <Headline>{title}</Headline>

            <div className="about-desc text-gray-400">{desc}</div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default AboutCenter;
