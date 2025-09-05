import Container from "@/shared/ui/Container";
import { Headline } from "@/shared/ui/Headline";
import AboutSwiper from "./AboutSwiper";

function AboutMain() {
  return (
    <section className="about-main">
      <Container>
        <div className="wrapper pt-28 flex flex-col gap-8">
          <Headline size="sm" as="h5" className="text-gray-400">
            история и концепция
          </Headline>

          <AboutSwiper />
        </div>
      </Container>
    </section>
  );
}

export default AboutMain;
