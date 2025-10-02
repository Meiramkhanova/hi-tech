import { MisstionProductInfo } from "@/entities/department-center/DepartmentCenter.t";
import Goal from "../icons/Goal";
import Container from "./Container";
import { Headline } from "./Headline";
import InfoItem from "./InfoItem";
import TechItem from "./TechItem";

function MissionProductInfo({
  sectionTitle = "",
  missionDesc = "",
  productDesc = "",
  targetAudience = "",
  durationOfTraining = "",
  problem = "",
  solution = "",
}: MisstionProductInfo) {
  return (
    <section className="mission-product-info">
      <Container>
        <div className="wrapper flex flex-col gap-6 md:gap-8 pt-24">
          <Headline size="sm" as="h5" className="text-gray-400 pb-2 ">
            {sectionTitle}
          </Headline>

          <div className="mission-product-items flex flex-col gap-6 md:gap-8">
            <div className="mission-product grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {missionDesc && (
                <InfoItem
                  desc={missionDesc}
                  title="Миссия"
                  localIcon={<Goal />}
                />
              )}

              {productDesc && (
                <InfoItem
                  desc={productDesc}
                  title="Продукт"
                  localIcon={<Goal />}
                />
              )}
            </div>

            <div className="items-wrapper grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              <TechItem
                icon={<Goal />}
                title="Целевая аудитория"
                desc={targetAudience}
                descClassName="line-clamp-0"
              />

              <TechItem
                icon={<Goal />}
                title="Продолжительность обучения"
                desc={durationOfTraining}
              />

              <TechItem icon={<Goal />} title="Проблема" desc={problem} />

              <TechItem icon={<Goal />} title="Наше решение" desc={solution} />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default MissionProductInfo;
