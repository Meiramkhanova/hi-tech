import { getKnowledgePageData } from "@/entities/knowledgepage/knowledge.service";
import Container from "@/shared/ui/Container";
import { Headline } from "@/shared/ui/Headline";
import TechItem from "@/shared/ui/TechItem";
import { getStrapiMedia } from "@/shared/utils/getStrapiMedia";
import Image from "next/image";

async function SchoolYaizy() {
  const data = await getKnowledgePageData();

  if (!data) return null;

  const headlineTitle = data?.headline;
  const yaizyImage = data?.yaizy_image;
  const yaizyTitle = data?.yaizy_title;
  const yaizyDescription = data?.yaizy_description;
  const yaizyInfoItems = data?.info_items;

  console.log(data, yaizyInfoItems);

  return (
    <section className="school-yaizy">
      <Container>
        <div className="wrapper pt-24 flex flex-col gap-6 md:gap-8">
          {headlineTitle && (
            <Headline size="sm" as="h5" className="text-gray-400 pb-2 ">
              {headlineTitle}
            </Headline>
          )}

          {yaizyImage && (
            <Image
              src={getStrapiMedia(yaizyImage.url)}
              alt="yaizy"
              width={96}
              height={36}
              className="w-24 h-9"
            />
          )}
          <div className="yaizy-title-description grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {yaizyTitle && (
              <Headline className="yaizy-title">{yaizyTitle}</Headline>
            )}

            {yaizyDescription && (
              <div className="yaizy-description text-gray-400">
                {yaizyDescription}
              </div>
            )}
          </div>

          {yaizyInfoItems && (
            <div className="yaizy-info-items grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 pt-6 md:pt-8">
              {yaizyInfoItems.map((item) => (
                <TechItem
                  key={item.id}
                  title={item.title}
                  desc={item.description}
                  strapiIcon={item.icon}
                />
              ))}
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}

export default SchoolYaizy;
