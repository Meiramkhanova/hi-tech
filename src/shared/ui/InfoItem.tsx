import { ReactElement, SVGProps } from "react";
import Button from "./Button";
import { Headline } from "./Headline";
import IconWrapper from "./IconWrapper";
import { cn } from "@/lib/utils";

interface InfoItemProps {
  icon?: ReactElement<SVGProps<SVGSVGElement>>;
  title: string;
  desc: string | string[];
  hasButton?: boolean;
  orderName?: number | string;
}

function InfoItem({
  icon,
  title,
  desc,
  hasButton = false,
  orderName,
}: InfoItemProps) {
  return (
    <div className="info-item border rounded-2xl p-6 flex flex-col gap-9 h-full w-fit">
      <div className="item-icon rounded-2xl text-theprimary size-20 flex items-center justify-center shrink-0 bg-theprimary/10">
        {icon && <IconWrapper icon={icon} />}

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
          <Button variant="outlined" className="mt-auto">
            Подробнее
          </Button>
        )}
      </div>
    </div>
  );
}

export default InfoItem;
