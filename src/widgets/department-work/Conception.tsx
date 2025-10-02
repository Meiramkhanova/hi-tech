import Profile from "@/shared/icons/Profile";
import Switcase from "@/shared/icons/Switcase";
import TheGoal from "@/shared/icons/TheGoal";
import Container from "@/shared/ui/Container";
import { Headline } from "@/shared/ui/Headline";
import InfoItem from "@/shared/ui/InfoItem";
import TechItem from "@/shared/ui/TechItem";

const conceptions = [
  {
    id: 1,
    icon: <TheGoal />,
    title: "Миссия",
    desc: "Помогать детям найти своё призвание и самореализоваться в наиболее восстребованных профессиях: разработка ПО, web3, data science, искуственный интеллект, количественные финансы, риск-менеджмент, консалтинг и финансовая аналитика",
  },
  {
    id: 2,
    icon: <Switcase />,
    title: "Продукт",
    desc: [
      "Ученики в команде разрабатывают свой собственный проект с учётом своих сильных сторон и интересов и преобретают навыки, полезные для выбора специализации будущей карьеры",
      "Проекты могут быть представлены в портфолио, что поможет выпускнику школы при трудоустройстве в компанию на на стажировку и при подаче в международный университет",
    ],
  },
];

const infos = [
  {
    id: 1,
    icon: <Profile />,
    title: "Целевая аудитория",
    desc: "Школьники с 9 класса.",
  },
  {
    id: 2,
    icon: <Profile />,
    title: "Продолжительность обучения",
    desc: "Непрерывное обучение, проекты по 3–4 месяца.",
  },
  {
    id: 3,
    icon: <Profile />,
    title: "Проблема",
    desc: "Высокий спрос на практические навыки, разрыв между школой и реальным миром.",
  },
  {
    id: 4,
    icon: <Profile />,
    title: "Наше решение",
    desc: "Проектное обучение, развитие навыков, сообщество выпускников и помощь с поступлением.",
  },
];

function Conception() {
  return (
    <section className="conception">
      <Container>
        <div className="wrapper flex flex-col gap-6 md:gap-8 pt-24">
          <Headline size="sm" as="h5" className="text-gray-400 pb-2 ">
            Концепция
          </Headline>

          <div className="conceptions grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
            {conceptions.map((conception) => (
              <InfoItem
                key={conception.id}
                title={conception.title}
                desc={conception.desc}
                localIcon={conception.icon}
              />
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
            {infos.map((info) => (
              <TechItem
                key={info.id}
                title={info.title}
                desc={info.desc}
                icon={info.icon}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Conception;
