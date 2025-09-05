import AboutInfo from "@/shared/ui/AboutInfo";

const directions = [
  {
    id: 1,
    iconText: "50%",
    title: "Практика и проекты",
    desc: "Реальные кейсы и задачи бизнеса в формате agile.",
  },
  {
    id: 2,
    iconText: "30%",
    title: "Прикладные знания",
    desc: "Мастер-классы и аналитика для развития профессиональных навыков.",
  },
  {
    id: 3,
    iconText: "20%",
    title: "Карьера и сообщество",
    desc: "Встречи с индустрией, критическое мышление и новые связи.",
  },
];

function DirectionsWrapper() {
  return (
    <div className="directions-wrapper grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 md:[&>*:last-child]:col-start-2">
      {directions.map((direction, i) => (
        <AboutInfo
          key={direction.id}
          title={direction.title}
          iconText={direction.iconText}
          desc={direction.desc}
          className={i === directions.length - 1 ? "rtl" : ""}
        />
      ))}
    </div>
  );
}

export default DirectionsWrapper;
