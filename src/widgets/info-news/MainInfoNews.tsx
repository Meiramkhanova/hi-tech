import Container from "@/shared/ui/Container";
import MainInfo from "./MainInfo";
import MainNews from "./MainNews";

function MainInfoNews() {
  return (
    <section className="main-info-news">
      <Container>
        <div className="wrapper pt-6 md:pt-8">
          <div className="info-news-wrapper w-full grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <MainInfo />

            <MainNews />
          </div>
        </div>
      </Container>
    </section>
  );
}

export default MainInfoNews;
