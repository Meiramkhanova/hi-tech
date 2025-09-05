import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface AboutInfoProps {
  icon?: ReactNode;
  iconText?: string;
  title: string;
  desc?: string;
  className?: string;
}

function AboutInfo({ icon, title, iconText, desc, className }: AboutInfoProps) {
  const [first, ...rest] = title.split(" ");

  return (
    <div
      className={cn(
        "border p-6 rounded-2xl flex flex-col xl:flex-row xl:items-center gap-6 ltr",
        desc && "justify-between",
        className
      )}>
      <div className="flex flex-col xl:items-center md:flex-row gap-6 ">
        {icon && <>{icon}</>}

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

export default AboutInfo;
