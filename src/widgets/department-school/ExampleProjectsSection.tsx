import { ExampleProjects } from "@/entities/department-school/DepartmentSchool.t";
import Container from "@/shared/ui/Container";
import { Headline } from "@/shared/ui/Headline";
import InfoItem from "@/shared/ui/InfoItem";
import { getTranslations } from "next-intl/server";

async function ExampleProjectsSection({
  example_projects,
}: Pick<ExampleProjects, "example_projects">) {
  const t = await getTranslations("schoolSlug");

  return (
    <section className="example-project">
      <Container>
        <div className="wrapper flex flex-col gap-6 md:gap-8 pt-24">
          <Headline size="sm" as="h5" className="text-gray-400 pb-2 ">
            {t("exampleProjects")}
          </Headline>

          <div className="example-project grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {example_projects?.map((exampleProject, index) => (
              <InfoItem
                key={exampleProject?.id}
                title={exampleProject?.title}
                orderName={index + 1}
                desc={exampleProject?.description}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

export default ExampleProjectsSection;
