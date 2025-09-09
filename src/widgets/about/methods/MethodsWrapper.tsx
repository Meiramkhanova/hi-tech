import AboutInfo from "@/shared/ui/AboutInfo";

const methods = [
  {
    id: 1,
    iconText: "1",
    title: "Проектное обучение",
    desc: "Студенты решают реальные задачи бизнеса и исследований.",
  },
  {
    id: 2,
    iconText: "2",
    title: "Agile и командные форматы",
    desc: "Гибкие методики и работа в группах формируют навыки сотрудничества.",
  },
  {
    id: 3,
    iconText: "3",
    title: "Кейс-методы и хакатоны",
    desc: "Интенсивы, где студенты тренируют критическое мышление и скорость решений.",
  },
  {
    id: 4,
    iconText: "4",
    title: "Мастер-классы и практические занятия",
    desc: "Работа с экспертами отрасли и прикладные навыки.",
  },
  {
    id: 5,
    iconText: "5",
    title: "Онлайн и офлайн форматы",
    desc: "Гибкость обучения с использованием цифровых инструментов и платформ.",
  },
];

function MethodsWrapper() {
  return (
    <div className="methods-wrapper grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 md:[&>*:last-child]:col-start-2">
      {methods.map((method) => (
        <AboutInfo
          key={method.id}
          title={method.title}
          iconText={method.iconText}
          desc={method.desc}
        />
      ))}
    </div>
  );
}

export default MethodsWrapper;
