import { QuantitativeRiskManagement } from "@/entities/department-school/DepartmentSchool.t";
import Education from "@/shared/icons/Education";
import Project from "@/shared/icons/Project";
import Container from "@/shared/ui/Container";
import { Headline } from "@/shared/ui/Headline";
import { cn } from "@/shared/utils/cn";
import { Check } from "lucide-react";
import { getTranslations } from "next-intl/server";

async function QuantitativeRiskManagementSection({
  projectDesc,
  financeDesc,
  riskManagementDesc,
  quantitativeModeling,
}: Pick<
  QuantitativeRiskManagement,
  "projectDesc" | "financeDesc" | "riskManagementDesc" | "quantitativeModeling"
>) {
  const t = await getTranslations("schoolSlug");

  return (
    <section className="quantitative-risk-management">
      <Container>
        <div className="wrapper flex flex-col gap-6 md:gap-8 pt-24">
          <Headline size="sm" as="h5" className="text-gray-400 pb-2 ">
            {t("quantitative risk management")}
          </Headline>

          <div className="items-wrapper grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <div
              className={cn(
                "project-item rounded-2xl bg-theprimary text-white",
                "grid grid-cols-1 2xl:grid-cols-2 gap-6 md:gap-8 p-8 items-center"
              )}>
              <div className="item-icon-title flex items-center gap-6 md:gap-8">
                <div className="icon-item size-24 flex shrink-0 items-center justify-center">
                  <Project className="size-12" />
                </div>

                <div className="item-title text-xl md:text-2xl">
                  {t("project")}
                </div>
              </div>

              <div className="item-desc font-light">{projectDesc}</div>
            </div>

            <div
              className={cn(
                "finance-item rounded-2xl border items-center",
                "grid grid-cols-1 2xl:grid-cols-2 gap-6 md:gap-8 p-8"
              )}>
              <div className="item-icon-title flex items-center gap-6 md:gap-8">
                <div className="icon-item size-24 bg-theprimary/10 text-theprimary flex shrink-0 items-center justify-center rounded-2xl">
                  <Education className="size-12" />
                </div>

                <div className="item-title text-xl md:text-2xl">
                  {t("finance")}
                </div>
              </div>

              <div className="item-desc font-light">{financeDesc}</div>
            </div>

            <div
              className={cn(
                "risk-management-item rounded-2xl border items-center",
                "grid grid-cols-1 2xl:grid-cols-2 gap-6 md:gap-8 p-8"
              )}>
              <div className="item-icon-title flex items-center gap-6 md:gap-8">
                <div className="icon-item size-24 bg-theprimary/10 text-theprimary flex shrink-0 items-center justify-center rounded-2xl">
                  <Check className="size-12" />
                </div>

                <div className="item-title text-xl md:text-2xl">
                  {t("risk management")}
                </div>
              </div>

              <div className="item-desc font-light">{riskManagementDesc}</div>
            </div>

            <div
              className={cn(
                "quantitative-modeling-item rounded-2xl border items-center",
                "grid grid-cols-1 2xl:grid-cols-2 gap-6 md:gap-8 p-8"
              )}>
              <div className="item-icon-title flex items-center gap-6 md:gap-8">
                <div className="icon-item size-24 bg-theprimary/10 text-theprimary flex shrink-0 items-center justify-center rounded-2xl">
                  <Project className="size-12 text-theprimary stroke-theprimary" />
                </div>

                <div className="item-title text-xl md:text-2xl">
                  {t("quantitative modeling")}
                </div>
              </div>

              <div className="item-desc font-light">{quantitativeModeling}</div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default QuantitativeRiskManagementSection;
