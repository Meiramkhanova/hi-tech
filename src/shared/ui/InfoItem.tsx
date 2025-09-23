import { Icon } from "@/entities/homepage/getHomepage.t";
import Button from "./Button";
import { Headline } from "./Headline";
import { cn } from "@/lib/utils";
import { getStrapiMedia } from "../utils/getStrapiMedia";
import { ReactNode } from "react";
import Image from "next/image";

interface InfoItemProps {
  icon?: Icon;
  title: string;
  desc: string | string[];
  hasButton?: boolean;
  orderName?: number | string;
  slug?: string;
  tempIcon?: ReactNode;
}

function InfoItem({
  icon,
  title,
  desc,
  hasButton = false,
  orderName,
  slug,
}: InfoItemProps) {
  return (
    <div className="info-item border rounded-2xl p-6 flex flex-col gap-9 h-full w-fit">
      <div className="item-icon rounded-2xl text-theprimary size-20 flex items-center justify-center shrink-0 bg-theprimary/10">
        {icon && (
          <Image
            src={getStrapiMedia(icon.url)}
            className="size-9 fill-theprimary/5 flex shrink-0"
            alt="icon"
            width={80}
            height={80}
          />
        )}

        {orderName && <div className="order text-2xl">{orderName}</div>}
      </div>

      <div className="item-info flex flex-col gap-6 flex-1 mt-auto h-full">
        <Headline className="normal-case font-medium">{title}</Headline>

        <div
          className={cn(
            "item-description text-gray-400 text-sm",
            Array.isArray(desc) && "flex flex-col gap-6 md:gap-8"
          )}>
          {Array.isArray(desc)
            ? desc.map((d, index) => <div key={index}>{d}</div>)
            : desc}
        </div>

        {hasButton && (
          <Button href={slug ?? "#"} variant="outlined" className="mt-auto">
            Подробнее
          </Button>
        )}
      </div>
    </div>
  );
}

export default InfoItem;
