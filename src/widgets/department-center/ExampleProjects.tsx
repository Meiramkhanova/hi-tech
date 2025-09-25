import { ExampleProjectsOfCenter } from "@/entities/department-center/DepartmentCenter.t";
import Container from "@/shared/ui/Container";
import { Headline } from "@/shared/ui/Headline";
import OrderTitle from "@/shared/ui/OrderTitle";

function ExampleProjects({
  example_projects_of_center,
}: ExampleProjectsOfCenter) {
  return (
    <section className="example-projects">
      <Container>
        <div className="wrapper flex flex-col gap-6 md:gap-8 pt-24">
          <Headline size="sm" as="h5" className="text-gray-400 pb-2 ">
            Примеры проектов
          </Headline>

          <div className="center-activities grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
            {example_projects_of_center.map((activity) => (
              <OrderTitle
                key={activity.id}
                order={activity.order}
                title={activity.title}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

export default ExampleProjects;
