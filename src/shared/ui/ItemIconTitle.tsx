import { ReactElement, SVGProps } from "react";
import IconWrapper from "./IconWrapper";

interface ItemIconTitleProps {
  icon: ReactElement<SVGProps<SVGSVGElement>>;
  title: string;
}

function ItemIconTitle({ icon, title }: ItemIconTitleProps) {
  const [firstWord, ...rest] = title.split(" ");
  const restText = rest.join(" ");

  return (
    <div className="border rounded-2xl p-6 flex items-center gap-6">
      <IconWrapper icon={icon} />

      <div className="title text-xl">
        <span>{firstWord}</span>

        <div>{restText && restText}</div>
      </div>
    </div>
  );
}

export default ItemIconTitle;
