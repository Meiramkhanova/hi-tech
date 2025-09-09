import Container from "@/shared/ui/Container";
import { Headline } from "@/shared/ui/Headline";

interface AboutDepartmentProps {
  subtitle: string;
  title: string;
  infos?: Array<string>;
}

function AboutDepartment({ subtitle, title, infos }: AboutDepartmentProps) {
  return (
    <section className="about-department">
      <Container>
        <div className="about-wrapper flex flex-col gap-6 md:gap-8 pt-24">
          <Headline size="sm" as="h5" className="text-gray-400 pb-2 ">
            {subtitle}
          </Headline>

          <div className="title-desc grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <Headline className="xl:max-w-[38rem]">{title}</Headline>

            <div className="description flex flex-col gap-6 md:gap-8 text-gray-400">
              {infos && infos.map((info, index) => <p key={index}>{info}</p>)}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default AboutDepartment;
