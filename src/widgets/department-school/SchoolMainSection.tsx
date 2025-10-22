import Container from "@/shared/ui/Container";

function SchoolMainSection() {
  return (
    <section>
      <Container>
        <div className="wrapper py-24 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <div className="school-info"></div>
        </div>
      </Container>
    </section>
  );
}

export default SchoolMainSection;
