import { getCareerCenterPageData } from "@/entities/career-center-page/careerCenter.service";
import Container from "@/shared/ui/Container";
import { Headline } from "@/shared/ui/Headline";
import { getStrapiMedia } from "@/shared/utils/getStrapiMedia";
import { getTranslations } from "next-intl/server";
import Image from "next/image";

async function InternationalTeam() {
  const t = await getTranslations("CareerCenterPage");

  const data = await getCareerCenterPageData();

  if (!data || !data?.international_team || !data?.international_team.length) {
    return null;
  }

  const team = data?.international_team;

  return (
    <section>
      <Container>
        <div className="wrapper flex flex-col gap-6 md:gap-8">
          <Headline size="sm" as="h5" className="text-gray-400 pb-2 ">
            {t("internationalTeam")}
          </Headline>

          {team && (
            <div className="international-team grid grid-cols-1 2xl:grid-cols-2 gap-6 md:gap-8 items-stretch">
              {team?.map((teamItem) => (
                <div
                  className="team-item-with-image w-full grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 h-full"
                  key={teamItem.id}>
                  <div className="team-info-item border rounded-2xl p-6 flex flex-col gap-6 md:gap-8 h-full">
                    <div className="name-graudate-year text-sm uppercase">
                      <span>{teamItem?.person_name}</span>

                      <span> {teamItem?.person_surname.charAt(0)}. </span>

                      <span>{t("graduation")} </span>

                      <span>
                        {new Date(teamItem?.graduate_year).getFullYear()}
                      </span>
                    </div>

                    <div className="graduate-direction text-2xl">
                      {teamItem?.graduate_direction}
                    </div>

                    <div className="description text-gray-400 leading-relaxed pb-8">
                      {teamItem?.description}
                    </div>
                  </div>

                  <div className="h-full team-person-image rounded-2xl">
                    <Image
                      src={getStrapiMedia(teamItem.image.url)}
                      alt="team-person-image"
                      width={328}
                      height={392}
                      className="w-full h-96 md:h-full max-h-[36rem] object-cover rounded-2xl"
                    />
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

export default InternationalTeam;
