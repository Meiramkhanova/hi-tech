import Container from "@/shared/ui/Container";
import { Headline } from "@/shared/ui/Headline";
import TechItem from "@/shared/ui/TechItem";

interface MainActivitiesProps {
  activities: Array<ActivityItem>;
  title: string;
}

interface ActivityItem {
  title: string;
  desc: string;
}

function MainActivities({ activities, title }: MainActivitiesProps) {
  return (
    <section className="main-activities">
      <Container>
        <div className="activities-wrapper flex flex-col gap-6 md:gap-8 pt-24">
          <Headline size="sm" as="h5" className="text-gray-400 pb-2">
            {title}
          </Headline>

          <div className="activities grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {activities.map((activity, index) => (
              <TechItem
                key={index}
                title={activity.title}
                desc={activity.desc}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

export default MainActivities;
