import { getTranslations } from "next-intl/server";
import { cn } from "../utils/cn";

async function Stepper({ textClassName }: { textClassName?: string }) {
  const t = await getTranslations("LaboratoriesPage");

  return (
    <div className="stepper w-full flex justify-center md:justify-start relative">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-20 relative w-full">
        <div
          className={cn(
            "line absolute z-0",
            "inset-y-0 w-1.5 left-[13px]",
            "lg:h-1.5 lg:w-full bg-teal-50 lg:inset-x-0 lg:top-3"
          )}
        />

        <div
          className={cn(
            "first-item flex items-center lg:flex-col lg:items-start gap-4",
            "text-theprimary relative z-10"
          )}>
          <div
            className={cn(
              "first-item-round rounded-2xl flex items-center justify-center",
              "shrink-0 size-8 bg-teal-50 font-medium"
            )}>
            1
          </div>

          <div className={cn("first-item-text", textClassName)}>
            {t("registration")}
          </div>
        </div>

        <div
          className={cn(
            "second-item flex items-center lg:flex-col lg:items-start gap-4",
            "text-theprimary relative z-10"
          )}>
          <div
            className={cn(
              "second-item-round rounded-2xl flex items-center justify-center",
              "shrink-0 size-8 bg-teal-50 font-medium"
            )}>
            2
          </div>

          <div
            className={cn("second-item-text 2xl:max-w-[80%]", textClassName)}>
            {t("initialProject")}
          </div>
        </div>

        <div
          className={cn(
            "third-item flex items-center lg:flex-col lg:items-start gap-4",
            "text-theprimary relative z-10"
          )}>
          <div
            className={cn(
              "third-item-round rounded-2xl flex items-center justify-center",
              "shrink-0 size-8 bg-teal-50 font-medium"
            )}>
            3
          </div>

          <div className={cn("third-item-text 2xl:max-w-[50%]", textClassName)}>
            {t("miniProject")}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stepper;
