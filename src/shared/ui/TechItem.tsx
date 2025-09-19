import { cn } from "@/lib/utils";
import { ReactElement, SVGProps } from "react";
import IconWrapper from "./IconWrapper";

interface TechItemProps {
  title: string;
  desc: string;
  icon?: ReactElement<SVGProps<SVGSVGElement>>;
}

function TechItem({ title, desc, icon }: TechItemProps) {
  return (
    <div className="tech-item border rounded-2xl p-6 grid grid-cols-1 2xl:grid-cols-2 items-center gap-6 md:gap-8 2xl:gap-10">
      <div
        className={cn(
          "left-side text-xl",
          icon && "flex flex-col md:flex-row md:items-center gap-4"
        )}>
        {icon && (
          <div className="icon rounded-2xl text-theprimary size-20 flex items-center justify-center shrink-0 bg-theprimary/10">
            <IconWrapper icon={icon} />
          </div>
        )}
        <span className="font-medium">{title}</span>
      </div>

      <div className="right-desc text-gray-400 text-sm line-clamp-2 mt-auto 2xl:mt-0">
        {desc}
      </div>
    </div>
  );
}

export default TechItem;
