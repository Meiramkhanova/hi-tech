import Certification from "@/shared/icons/Certification";
import DoneIcon from "@/shared/icons/DoneIcon";
import Earth from "@/shared/icons/Earth";
import Container from "@/shared/ui/Container";
import { Headline } from "@/shared/ui/Headline";
import TechItem from "@/shared/ui/TechItem";
import Image from "next/image";

const infos = [
  {
    id: 1,
    title: "50+ сертификаций",
    icon: <Certification />,
    desc: "(Google UX Design, Unity, CompTIA, Canva и др.)",
  },
  {
    id: 2,
    title: "Практические треки",
    icon: <DoneIcon />,
    desc: "В IT, бизнесе, маркетинге, финансах, креативных индустриях.",
  },
  {
    id: 3,
    title: "Международное признание",
    icon: <Earth />,
    desc: "Сертификаты и портфолио учитываются университетами по всему миру.",
  },
];

function Partners() {
  return (
    <section className="partners">
      <Container>
        <div className="wrapper flex flex-col gap-6 md:gap-8 pt-24">
          <Headline size="sm" as="h5" className="text-gray-400 pb-2 ">
            Партнёрство с YaizY
          </Headline>

          <div className="title-info flex flex-col gap-6 md:gap-8">
            <div className="company-name">
              <Image
                src="/assets/yaizy.png"
                alt="company-name"
                width={92}
                height={35}
                className="w-24 h-9 object-cover"
              />
            </div>

            <div className="title-info pt-8 grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
              <Headline>
                Международные образовательные программы для школьников
              </Headline>

              <div className="info text-gray-400">
                Совместно с платформой YaizY школьники получают доступ к
                современным образовательным трекам и более чем 50 международным
                сертификациям. Программы охватывают IT, финансы, бизнес, дизайн,
                маркетинг и искусство.Сертификации помогают при поступлении в
                зарубежные университеты и на стажировки в международные
                компании.
              </div>
            </div>
          </div>

          <div className="detail-infos grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 pt-8">
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

export default Partners;
