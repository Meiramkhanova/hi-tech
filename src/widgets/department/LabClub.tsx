import Container from "@/shared/ui/Container";
import { Headline } from "@/shared/ui/Headline";
import InfoItem from "@/shared/ui/InfoItem";

const labinfos = [
  {
    id: 1,
    name: "Lab",
    title: "Практическая лаборатория венчурной аналитики.",
    desc: "Фокус: оценка стартапов, инвестиционные мемо, due diligence, работа с deal flow и инвестиционным комитетом.",
  },
  {
    id: 2,
    name: "Club",
    title: "Студенческое сообщество инвесторов и основателей.",
    desc: "Фокус: обсуждение сделок, mock investment committee, питч-сессии, встречи с VC-фондами и стартаперами.",
  },
];

function LabClub() {
  return (
    <section className="lab-and-club">
      <Container>
        <div className="wrapper flex flex-col gap-6 md:gap-8 pt-24">
          <Headline size="sm" as="h5" className="text-gray-400 pb-2 ">
            VC Lab и VC Club
          </Headline>

          <div className="lab-club-wrapper grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
            {labinfos.map((labinfo) => (
              <InfoItem
                key={labinfo.id}
                title={labinfo.title}
                desc={labinfo.desc}
                orderName={labinfo.name}
                hasButton
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

export default LabClub;
