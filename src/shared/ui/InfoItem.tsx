"use client";

import { Icon } from "@/entities/homepage/getHomepage.t";
import Button from "./Button";
import { Headline } from "./Headline";
import { cn } from "@/lib/utils";
import { useStrapiMedia } from "../utils/useStrapiMedia";
import { ReactElement, SVGProps } from "react";
import Image from "next/image";
import IconWrapper from "./IconWrapper";
import { StrapiIcon } from "@/entities/types";

interface InfoItemProps {
  icon?: Icon | StrapiIcon;
  title: string;
  desc?: string | string[];
  hasButton?: boolean;
  orderName?: number | null | string;
  slug?: string;
  departmentSlug?: string;
  localIcon?: ReactElement<SVGProps<SVGSVGElement>>;
  className?: string;
  hasRegister?: boolean;
  subTitle?: string;
  isTitleGreen?: boolean;
  descWithId?: Array<{ id: number; text: string }> | string[];
  HasDescWithIdTitle?: boolean;
  descWithIdClassName?: string;
}

function InfoItem({
  icon,
  title,
  desc,
  hasButton = false,
  orderName,
  slug,
  departmentSlug,
  localIcon,
  className,
  hasRegister,
  subTitle,
  isTitleGreen = false,
  descWithId,
  HasDescWithIdTitle = false,
  descWithIdClassName,
}: InfoItemProps) {
  const href =
    departmentSlug && slug ? `/${departmentSlug}/${slug}` : slug ?? "#";

  const iconSrc = useStrapiMedia(icon?.url);

  return (
    <div
      className={cn(
        "info-item border rounded-2xl p-6 flex flex-col gap-9 h-full w-fit 2xl:min-w-[24.5rem] bg-white",
        className,
        isTitleGreen && "pb-12 w-full"
      )}>
      <div
        className={cn(
          "info-item-top",
          isTitleGreen && "flex items-center gap-4"
        )}>
        <div className="item-icon rounded-2xl text-theprimary size-20 flex items-center justify-center shrink-0 bg-theprimary/10">
          {icon && (
            <Image
              src={iconSrc}
              className="size-9 fill-theprimary/5 flex shrink-0"
              alt="icon"
              width={80}
              height={80}
            />
          )}

          {localIcon && <IconWrapper icon={localIcon} />}

          {orderName && <div className="order text-2xl">{orderName}</div>}
        </div>

        {isTitleGreen && (
          <Headline className="normal-case font-medium text-theprimary">
            {title}
          </Headline>
        )}
      </div>

      <div
        className={cn(
          "item-info",
          !isTitleGreen && "mt-auto flex flex-col gap-4 flex-1 h-full"
        )}>
        {!isTitleGreen && (
          <Headline className="normal-case font-medium">{title}</Headline>
        )}

        {subTitle && (
          <div className="subtitle uppercase font-medium">«{subTitle}»</div>
        )}

        <div
          className={cn(
            "item-description text-gray-400 text-sm",
            Array.isArray(desc) && "flex flex-col gap-6 md:gap-8"
          )}>
          {Array.isArray(desc)
            ? desc.map((d, index) => <div key={index}>{d}</div>)
            : desc}
        </div>

        {HasDescWithIdTitle && (
          <div className="text-gray-400 pb-4 text-sm">
            Возможные направления после лаборатории:
          </div>
        )}

        {descWithId && (
          <ul
            className={cn(
              "item-description text-sm flex flex-col gap-4 list-disc list-inside",
              descWithIdClassName
            )}>
            {descWithId.map((d, index) => (
              <li key={index}>{typeof d === "string" ? d : d.text}</li>
            ))}
          </ul>
        )}

        <div
          className={cn(
            "mt-auto",
            hasRegister &&
              "flex flex-col lg:flex-row lg:items-center gap-4 pt-8"
          )}>
          {hasRegister && (
            <Button
              href={`/lab-registration?lab=${encodeURIComponent(title)}`}
              variant="primary"
              className="w-full lg:w-fit">
              Зарегистрироваться
            </Button>
          )}

          {hasButton && (
            <Button href={href} variant="outlined" className="w-full lg:w-fit">
              Подробнее
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}

export default InfoItem;
