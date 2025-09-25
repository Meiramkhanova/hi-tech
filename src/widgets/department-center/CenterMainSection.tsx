import Mission from "@/shared/icons/Mission";
import Container from "@/shared/ui/Container";
import { Headline } from "@/shared/ui/Headline";

function CenterMainSection({ title }: { title?: string }) {
  return (
    <section className="department-center">
      <Container>
        <div className="wrapper min-h-[10rem] md:min-h-[20rem] flex items-center">
          <div className="icon-title flex items-center gap-6 md:gap-8">
            <div className="icon-wrapper size-24 rounded-2xl bg-theprimary/10 flex items-center justify-center shrink-0">
              <Mission className="fill-theprimary/5" />
            </div>

            <Headline className="max-w-[34rem] uppercase">{title}</Headline>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default CenterMainSection;
