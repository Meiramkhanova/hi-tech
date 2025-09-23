import { AboutInfo } from "@/entities/homepage/getHomepage.t";
import { cn } from "@/lib/utils";
import { getStrapiMedia } from "../utils/getStrapiMedia";
import Image from "next/image";

interface AboutInfoItemProps {
  aboutInfo: AboutInfo;
  className?: string;
  iconText?: string;
  desc?: string;
}

function AboutInfoItem({
  aboutInfo,
  className,
  iconText,
  desc,
}: AboutInfoItemProps) {
  const [first, ...rest] = aboutInfo.title.split(" ");

  return (
    <div
      className={cn(
        "border p-6 rounded-2xl flex flex-col xl:flex-row xl:items-center gap-6 ltr",
        aboutInfo.title && "justify-between",
        className
      )}>
      <div className="flex flex-col xl:items-center md:flex-row gap-6 ">
        {aboutInfo.svgImage && (
          <Image
            src={getStrapiMedia(aboutInfo.svgImage.url)}
            alt={aboutInfo.title}
            className="size-11"
            width={80}
            height={80}
          />
        )}

        {iconText && (
          <div className="icon-text text-theprimary size-fit xl:size-24 flex items-center justify-center text-2xl">
            {iconText}
          </div>
        )}

        <div className="info-title text-xl 2xl:text-nowrap xl:w-1/2">
          <span className="block">{first}</span>

          {rest.join(" ")}
        </div>
      </div>

      {desc && <div className="description text-gray-400 xl:w-1/2">{desc}</div>}
    </div>
  );
}

export default AboutInfoItem;
