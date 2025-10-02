import getLabItems from "@/entities/lab-items/getLabItems.service";
import Container from "@/shared/ui/Container";
import { Headline } from "@/shared/ui/Headline";
import Image from "next/image";

async function LabMainSection() {
  const data = await getLabItems();

  if (!data) {
    return null;
  }

  const totalLabItems = data?.data.length;

  return (
    <section className="lab-main-section">
      <Container>
        <div className="pt-8 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 xl:h-[calc(100vh-80px)]">
          <div className="left-main-section h-full flex flex-col justify-between pt-12 md:pb-12">
            <Headline>Лаборатории</Headline>

            <Headline>
              <span>{totalLabItems ?? 0}</span> лабораторий будущего в Нархозе
            </Headline>

            <div className="lab-description text-gray-400">
              Присоединяйся к студенческим лабораториям — от инвестиций и ИИ до
              суперфоркастинга и бизнес-аналитики. Получи опыт, которого нет в
              учебниках
            </div>
          </div>

          <div className="right-main-section h-full md:pb-12">
            <Image
              src="/assets/narxoz-lab.png"
              alt="narxoz-lab"
              width={672}
              height={672}
              className="h-[21rem] md:h-[35rem]  xl:size-full rounded-2xl object-cover"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}

export default LabMainSection;
