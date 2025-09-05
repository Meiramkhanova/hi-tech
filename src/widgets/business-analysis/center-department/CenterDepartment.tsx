import Container from "@/shared/ui/Container";
import { Headline } from "@/shared/ui/Headline";

function CenterDepartment() {
  return (
    <section className="center-department">
      <Container>
        <div className="center-department-wrapper py-24 flex flex-col gap-6 md:gap-8">
          <Headline size="sm" as="h5" className="text-gray-400 pb-2">
            Центры департамента
          </Headline>
        </div>
      </Container>
    </section>
  );
}

export default CenterDepartment;
