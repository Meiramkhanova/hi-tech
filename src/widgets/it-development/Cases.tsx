import { getItDevelopmentPageData } from "@/entities/it-development-page/it-development.service";
import Container from "@/shared/ui/Container";
import { Headline } from "@/shared/ui/Headline";
import { getStrapiMedia } from "@/shared/utils/getStrapiMedia";
import { getTranslations } from "next-intl/server";
import Image from "next/image";

async function Cases() {
  const t = await getTranslations("ItDevelopmentPage");

  const data = await getItDevelopmentPageData();

  if (!data || !data.cases || !data.cases.length) {
    return null;
  }

  const cases = data?.cases;

  return (
    <section>
      <Container>
        <div className="wrapper flex flex-col gap-6 md:gap-8">
          <Headline size="sm" as="h5" className="text-gray-400 pb-2 ">
            {t("cases")}
          </Headline>

          {cases && (
            <div className="cases">
              {cases?.map((item) => (
                <div
                  key={item.id}
                  className="items-of-one-case grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 min-h-96 gap-6 md:gap-8">
                  <div className="case-info-item border rounded-2xl p-4 flex flex-col gap-6 md:gap-8">
                    <div className="case-date">{item.date}</div>

                    <Headline>{item.title}</Headline>

                    <div className="item-info-description text-sm text-gray-400 leading-relaxed">
                      {item.description}
                    </div>
                  </div>

                  {item?.images.map((image) => (
                    <Image
                      src={getStrapiMedia(image.url)}
                      alt="case-image"
                      key={image.id}
                      width={320}
                      height={392}
                      className="h-full object-cover rounded-2xl w-full"
                    />
                  ))}
                </div>
              ))}
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}

export default Cases;
