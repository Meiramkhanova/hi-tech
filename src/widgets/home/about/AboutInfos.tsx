import { AboutInfo } from "@/entities/homepage/getHomepage.t";
import Compass from "@/shared/icons/Compass";
import Globe from "@/shared/icons/Globe";
import Settings from "@/shared/icons/Settings";
import UserProfile from "@/shared/icons/UserProfile";
import AboutInfoItem from "@/shared/ui/AboutInfoItem";

// const aboutIcons = [
//   {
//     id: 1,
//     icon: <Compass className="size-8" />,
//     title: "Практика и проекты",
//   },
//   {
//     id: 2,
//     icon: <Globe className="size-8" />,
//     title: "Глобальный взгляд",
//   },
//   {
//     id: 3,
//     icon: <UserProfile className="size-8" />,
//     title: "Эксперты и наставники",
//   },
//   {
//     id: 4,
//     icon: <Settings className="size-8" />,
//     title: "Инновации и технологии",
//   },
// ];

interface AboutInfosProps {
  aboutInfos: AboutInfo[];
}

function AboutInfos({ aboutInfos }: AboutInfosProps) {
  return (
    <div className="about-infos w-full grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 md:gap-8">
      {aboutInfos.map((aboutInfo) => (
        <AboutInfoItem key={aboutInfo.id} aboutInfo={aboutInfo} />
      ))}
    </div>
  );
}

export default AboutInfos;
