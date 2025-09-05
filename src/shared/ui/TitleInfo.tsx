import { cn } from "@/lib/utils";
import { Headline } from "./Headline";
import Container from "./Container";

interface TitleInfoProps {
  hastitle?: boolean;
  title?: string;
  descriptions?: Array<string>;
}

function TitleInfo({ hastitle = false, title, descriptions }: TitleInfoProps) {
  return (
    <section
      className={cn(
        "title-info pt-24",
        hastitle && "flex flex-col gap-6 md:gap-8"
      )}>
      <Container>
        {hastitle && (
          <Headline size="sm" as="h5" className="text-gray-400 pb-2">
            О нас
          </Headline>
        )}
        <div className="title-info grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <Headline className="leading-snug">{title}</Headline>

          <div className="info-wrapper flex flex-col gap-6 md:gap-8">
            {descriptions?.map((description, index) => (
              <div key={index} className="description-item text-gray-400">
                {description}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

export default TitleInfo;
