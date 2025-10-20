import { TheTitleUnorderedItems } from "@/entities/department-center/DepartmentCenter.t";
import Container from "@/shared/ui/Container";
import { Headline } from "@/shared/ui/Headline";
import TechItem from "@/shared/ui/TechItem";

function TitleUnorderedItems({
  items,
  sectionTitle = "",
}: TheTitleUnorderedItems) {
  return (
    <section className="about-info">
      <Container>
        <div className="activities-wrapper flex flex-col gap-6 md:gap-8 pt-24">
          <Headline size="sm" as="h5" className="text-gray-400 pb-2">
            {sectionTitle}
          </Headline>

          <div className="activities grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {items &&
              items?.map((activity, index) => (
                <TechItem
                  key={`activity-${activity.id}-${index}`}
                  title={activity.title}
                  desc={activity.desc}
                  descClassName="line-clamp-0"
                />
              ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

export default TitleUnorderedItems;
