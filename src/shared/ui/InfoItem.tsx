import { ReactNode } from "react";
import Button from "./Button";
import { Headline } from "./Headline";

interface InfoItemProps {
  icon: ReactNode;
  title: string;
  desc: string;
  hasButton?: boolean;
}

function InfoItem({ icon, title, desc, hasButton = false }: InfoItemProps) {
  return (
    <div className="info-item border rounded-2xl p-6 flex flex-col gap-9 h-full w-fit">
      <div className="item-icon rounded-2xl size-20 flex items-center justify-center bg-theprimary/10">
        {icon}
      </div>

      <div className="item-info flex flex-col gap-6 mt-auto">
        <Headline className="normal-case">{title}</Headline>

        <div className="item-description text-gray-400 text-sm ">{desc}</div>

        {hasButton && <Button variant="outlined">Подробнее</Button>}
      </div>
    </div>
  );
}

export default InfoItem;
