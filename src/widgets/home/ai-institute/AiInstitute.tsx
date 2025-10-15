import { cn } from "@/lib/utils";
import Compass from "@/shared/icons/Compass";
import File from "@/shared/icons/File";
import Goal from "@/shared/icons/Goal";
import Profile from "@/shared/icons/Profile";
import Transport from "@/shared/icons/Transport";
import Container from "@/shared/ui/Container";
import { Headline } from "@/shared/ui/Headline";
import InfoItem from "@/shared/ui/InfoItem";
import { getTranslations } from "next-intl/server";
import Image from "next/image";

async function AiInstitute() {
  const t = await getTranslations("HomePage");

  const instituteInfos = [
    {
      icon: <Goal />,
      title: t("AIInstitute.Product"),
      desc: [
        t("AIInstitute.Products.desc1"),
        t("AIInstitute.Products.desc2"),
        t("AIInstitute.Products.desc3"),
        t("AIInstitute.Products.desc4"),
        t("AIInstitute.Products.desc5"),
        t("AIInstitute.Products.desc6"),
      ],
    },
    {
      icon: <Transport />,
      title: t("AIInstitute.Potential"),
      desc: [
        t("AIInstitute.Potentials.desc1"),
        t("AIInstitute.Potentials.desc2"),
        t("AIInstitute.Potentials.desc3"),
        t("AIInstitute.Potentials.desc4"),
      ],
    },
  ];

  return (
    <section className="ai-institute">
      <div className="outer-bg-wrapper bg-theprimary mt-24 rounded-2xl">
        <Container>
          <div className="inner-wrapper flex flex-col gap-6 md:gap-8 py-8">
            <Headline size="sm" as="h5" className="pb-2 text-white ">
              AI institute
            </Headline>

            <div className="institute-info-wrapper w-full pb-12 text-white ">
              <div className="institute-title-desc w-full grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                <Headline>{t("AIInstitute.whoWeAre")}</Headline>

                <div className="institute-desc">{t("AIInstitute.desc")}</div>
              </div>
            </div>

            <div
              className={cn(
                "institute-infos-image w-full text-white  grid grid-cols-1 md:grid-cols-2",
                "gap-6 md:gap-8 md:items-center pb-12"
              )}>
              <div className="institute-infos">
                <div className="practice-prjects border-y border-white/50 py-8 flex items-center gap-8">
                  <div className="icon">
                    <Compass className="w-12 h-12 fill-transparent" />
                  </div>

                  <div className="title-desc">
                    <div className="title text-white/50 uppercase">
                      {t("AIInstitute.practiceAndProjects")}
                    </div>

                    <div className="text-lg md:text-2xl">
                      {t("AIInstitute.practiceDesc")}
                    </div>
                  </div>
                </div>

                <div className="project-approach border-y border-white/50 py-8 flex items-center gap-8">
                  <div className="icon">
                    <File className="w-12 h-12 fill-transparent" />
                  </div>

                  <div className="title-desc">
                    <div className="title text-white/50 uppercase">
                      {t("AIInstitute.project")}
                    </div>

                    <div className="text-lg md:text-2xl">
                      {t("AIInstitute.projectDesc")}
                    </div>
                  </div>
                </div>

                <div className="partnership border-y border-white/50 py-8 flex items-center gap-8">
                  <div className="icon">
                    <Profile className="w-12 h-12 fill-transparent" />
                  </div>

                  <div className="title-desc">
                    <div className="title text-white/50 uppercase">
                      {t("AIInstitute.partnership")}
                    </div>

                    <div className="text-lg md:text-2xl">
                      {t("AIInstitute.partnershipDesc")}{" "}
                    </div>
                  </div>
                </div>
              </div>

              <Image
                alt="ai-institute"
                src="/assets/ai-institute.jpg"
                width={672}
                height={387}
                className="w-full h-[25rem] md:h-[27rem] object-cover rounded-2xl"
              />
            </div>

            <div className="product-potential grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {instituteInfos.map((instituteInfo, index) => (
                <InfoItem
                  key={index}
                  title={instituteInfo.title}
                  localIcon={instituteInfo.icon}
                  isTitleGreen
                  descWithId={instituteInfo.desc}
                  descWithIdClassName="text-gray-400"
                />
              ))}
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}

export default AiInstitute;
