import { getMentoringPageData } from "@/entities/mentoring-page/mentoring.service";
import Container from "@/shared/ui/Container";
import { Headline } from "@/shared/ui/Headline";
import { cn } from "@/shared/utils/cn";
import { getStrapiMedia } from "@/shared/utils/getStrapiMedia";
import { getTranslations } from "next-intl/server";
import Image from "next/image";

async function MentoringExperts() {
  const t = await getTranslations("MentoringPage");

  const data = await getMentoringPageData();

  if (!data || !data?.experts || !data?.experts.length) {
    return null;
  }

  const experts = data?.experts;

  return (
    <section className="mentoring">
      <Container>
        <div className="wrapper flex flex-col gap-6 md:gap-8 pt-24">
          <Headline size="sm" as="h5" className="text-gray-400 pb-2 ">
            {t("ourExperts")}
          </Headline>

          {experts && (
            <div
              className={cn(
                "experts-wrapper grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4",
                "gap-6 md:gap-8"
              )}>
              {experts.map((expert) => (
                <div
                  className="expert-item border rounded-2xl p-4 flex gap-6"
                  key={expert.id}>
                  <Image
                    src={getStrapiMedia(expert?.image?.url)}
                    alt="expert-image"
                    width={92}
                    height={92}
                    className="size-24 object-cover rounded-2xl"
                  />

                  <div className="expert-name-role flex flex-col gap-2 pt-2">
                    <div className="expert-name font-medium">
                      {expert.fullName}
                    </div>

                    <div className="expert-role text-gray-400">
                      {expert.role}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}

export default MentoringExperts;
