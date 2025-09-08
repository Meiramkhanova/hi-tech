import { cloneElement, ReactElement, SVGProps } from "react";

interface IconWrapperProps {
  icon: ReactElement<SVGProps<SVGSVGElement>>;
}

function IconWrapper({ icon }: IconWrapperProps) {
  return cloneElement(icon, {
    className:
      "size-8 md:size-10 fill-theprimary/5 " + (icon.props.className ?? ""),
  });
}

export default IconWrapper;
