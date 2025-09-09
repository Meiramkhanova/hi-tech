import { ReactElement, SVGProps } from "react";
import Button from "./Button";
import { Headline } from "./Headline";
import IconWrapper from "./IconWrapper";

interface InfoItemProps {
  icon?: ReactElement<SVGProps<SVGSVGElement>>;
  title: string;
  desc: string;
  hasButton?: boolean;
  order?: number;
}

function InfoItem({
  icon,
  title,
  desc,
  hasButton = false,
  order,
}: InfoItemProps) {
  return (
    <div className="info-item border rounded-2xl p-6 flex flex-col gap-9 h-full w-fit">
      <div className="item-icon rounded-2xl text-theprimary size-20 flex items-center justify-center bg-theprimary/10">
        {icon && <IconWrapper icon={icon} />}

        {order && <div className="order text-2xl">{order}</div>}
      </div>

      <div className="item-info flex flex-col gap-6 mt-auto">
        <Headline className="normal-case font-medium">{title}</Headline>

        <div className="item-description text-gray-400 text-sm ">{desc}</div>

        {hasButton && <Button variant="outlined">Подробнее</Button>}
      </div>
    </div>
  );
}

export default InfoItem;
