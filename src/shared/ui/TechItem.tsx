import { cn } from "@/lib/utils";
import { ReactElement, SVGProps } from "react";
import IconWrapper from "./IconWrapper";
import { StrapiIcon } from "@/entities/types";
import Image from "next/image";
import { getStrapiMedia } from "../utils/getStrapiMedia";

interface TechItemProps {
  title: string;
  desc: string;
  icon?: ReactElement<SVGProps<SVGSVGElement>>;
  descClassName?: string;
  iconOrder?: number;
  boldDesc?: string;
  strapiIcon?: StrapiIcon;
}

function TechItem({
  title,
  desc,
  icon,
  descClassName,
  iconOrder,
  boldDesc,
  strapiIcon,
}: TechItemProps) {
  return (
    <div className="tech-item border rounded-2xl p-6 grid grid-cols-1 2xl:grid-cols-[1fr_auto] items-center gap-6 md:gap-8">
      <div
        className={cn(
          "left-side text-xl",
          (icon || iconOrder || strapiIcon) &&
            "flex flex-col md:flex-row md:items-center gap-6"
        )}>
        {(icon || iconOrder || strapiIcon) && (
          <div className="icon rounded-2xl text-theprimary size-20 flex items-center justify-center shrink-0 bg-theprimary/10">
            {icon ? (
              <IconWrapper icon={icon} />
            ) : iconOrder ? (
              <span className="item-order">{iconOrder}</span>
            ) : (
              <Image
                src={getStrapiMedia(strapiIcon?.url)}
                alt="info-img"
                width={48}
                height={48}
                className="size-12"
              />
            )}
          </div>
        )}

        <span>{title}</span>
      </div>

      <div className="mt-auto 2xl:mt-0 min-w-0 max-w-fit">
        {boldDesc && (
          <div className="right-desc-info font-medium">{boldDesc}</div>
        )}

        <div
          className={cn(
            "right-desc text-gray-400 text-sm line-clamp-2",
            descClassName
          )}>
          {desc}
        </div>
      </div>
    </div>
  );
}

export default TechItem;
