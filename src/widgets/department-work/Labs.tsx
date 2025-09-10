import Container from "@/shared/ui/Container";
import { Headline } from "@/shared/ui/Headline";
import LabItem from "./components/LabItem";

const labs = [
  {
    id: 1,
    title: "Лаборатория программирования",
  },
  {
    id: 2,
    title: "Лаборатория Web3",
  },
  {
    id: 3,
    title: "Лаборатория Data Science",
  },
  {
    id: 4,
    title: "Лаборатория искусственного интеллекта",
  },
  {
    id: 5,
    title: "Лаборатория количественных финансов",
  },
  {
    id: 6,
    title: "Лаборатория инвестиций",
  },
];

function Labs() {
  return (
    <section className="labs">
      <Container>
        <div className="wrapper flex flex-col gap-6 md:gap-8 pt-24">
          <Headline size="sm" as="h5" className="text-gray-400 pb-2">
            Лаборатории
          </Headline>

          <div className="labs-wrapper grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 ">
            {labs.map((lab) => (
              <LabItem key={lab.id} order={lab.id} title={lab.title} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Labs;
