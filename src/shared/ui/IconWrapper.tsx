import { cloneElement, ReactElement, SVGProps } from "react";

interface IconWrapperProps {
  icon?: ReactElement<SVGProps<SVGSVGElement>>;
}

function IconWrapper({ icon }: IconWrapperProps) {
  if (!icon) return null;

  return cloneElement(icon, {
    className:
      "size-9 fill-theprimary/5 flex shrink-0" + (icon.props?.className ?? ""),
  });
}

export default IconWrapper;
