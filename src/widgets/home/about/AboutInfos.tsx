import { AboutInfo } from "@/entities/homepage/getHomepage.t";
import AboutInfoItem from "@/shared/ui/AboutInfoItem";

interface AboutInfosProps {
  aboutInfos: AboutInfo[];
}

function AboutInfos({ aboutInfos }: AboutInfosProps) {
  if (!aboutInfos?.length) return null;

  return (
    <div className="about-infos w-full grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 md:gap-8">
      {aboutInfos.map((aboutInfo) => (
        <AboutInfoItem key={aboutInfo.id} aboutInfo={aboutInfo} />
      ))}
    </div>
  );
}

export default AboutInfos;
