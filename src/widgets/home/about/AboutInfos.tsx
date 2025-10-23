import Compass from "@/shared/icons/Compass";
import Globe from "@/shared/icons/Globe";
import Profile from "@/shared/icons/Profile";
import Settings from "@/shared/icons/Settings";
import AboutInfoItem from "@/shared/ui/AboutInfoItem";
import { getTranslations } from "next-intl/server";

async function AboutInfos() {
  const t = await getTranslations("HomePage");

  const aboutInfos = [
    {
      icon: <Compass className=" stroke-[#32BEAA]" />,
      title: t("About.title1"),
    },
    {
      icon: <Globe />,
      title: t("About.title2"),
    },
    {
      icon: <Profile className=" stroke-[#32BEAA]" />,
      title: t("About.title3"),
    },
    {
      icon: <Settings />,
      title: t("About.title4"),
    },
  ];

  return (
    <div className="about-infos w-full grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 md:gap-8">
      {aboutInfos.map((aboutInfo, index) => (
        <AboutInfoItem
          key={index}
          title={aboutInfo.title}
          icon={aboutInfo.icon}
        />
      ))}
    </div>
  );
}

export default AboutInfos;
