import Container from "@/shared/ui/Container";
import MainInfo from "./MainInfo";
import MainNews from "./MainNews";

function MainInfoNews() {
  return (
    <section className="main-info-news">
      <div className="wrapper pt-6 md:pt-8">
        <Container>
          <div className="info-news-wrapper w-full grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <MainInfo />

            <MainNews />
          </div>
        </Container>
      </div>
    </section>
  );
}

export default MainInfoNews;
