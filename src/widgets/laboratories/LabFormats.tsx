import Container from "@/shared/ui/Container";
import { Headline } from "@/shared/ui/Headline";
import TechItem from "@/shared/ui/TechItem";

const formats = [
  {
    title: "За счет гранта института",
    desc: "Если решил сложный проект",
    boldText: "",
  },
  {
    title: "Базовый",
    desc: "Если решил сложный проект",
    boldText: "25 000 ₸/месяц",
  },
  {
    title: "Углубленный",
    desc: "Больше часов, поддержка преподавателей",
    boldText: "49 000 ₸/месяц",
  },
];

function LabFormats() {
  return (
    <section className="lab-formars">
      <Container>
        <div className="wrapper flex flex-col gap-6 md:gap-8 pt-24">
          <Headline size="sm" as="h5" className="text-gray-400 pb-2 ">
            Форматы
          </Headline>

          <div className="formats grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {formats.map((format, index) => (
              <TechItem
                key={index}
                title={format.title}
                desc={format.desc}
                iconOrder={index + 1}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

export default LabFormats;
