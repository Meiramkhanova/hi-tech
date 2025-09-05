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
        "border p-6 rounded-2xl flex items-center gap-6 ltr",
        desc && "justify-between",
        className
      )}>
      {icon && <>{icon}</>}

      {iconText && (
        <div className="icon-text text-theprimary size-24 flex items-center justify-center text-2xl">
          {iconText}
        </div>
      )}

      <div className="info-title text-xl text-nowrap w-1/2">
        <span className="block">{first}</span>

        {rest.join(" ")}
      </div>

      {desc && <div className="description text-gray-400 w-1/2">{desc}</div>}
    </div>
  );
}

export default AboutInfo;
