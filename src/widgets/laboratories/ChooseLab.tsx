"use client";

import { LabDirectionItem } from "@/entities/laboratories-page/getLabPage.t";
import { cn } from "@/lib/utils";
import Button from "@/shared/ui/Button";
import InfoItem from "@/shared/ui/InfoItem";
import { useState } from "react";

function ChooseLab({ labDirections }: { labDirections: LabDirectionItem[] }) {
  const [activeTab, setActiveTab] = useState<string>(
    labDirections?.[0]?.title || ""
  );

  const activeTabData = labDirections.find((tab) => tab.title === activeTab);

  console.log("saz", activeTabData);

  return (
    <div className="labs-wrapper pt-8 flex flex-col gap-6 md:gap-8">
      <div className="tabs flex flex-col sm:flex-row sm:items-center gap-2">
        {labDirections.map((tabData) => (
          <Button
            key={tabData.id}
            onClick={() => setActiveTab(tabData.title)}
            size="sm"
            className={cn(
              "rounded-full w-full sm:w-fit",
              activeTab !== tabData.title &&
                "bg-thesecondary/50 border-thesecondary/0"
            )}>
            {tabData.title}
          </Button>
        ))}
      </div>

      <div className="lab-items grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {activeTabData?.lab_items?.map((labItem) => (
          <InfoItem
            key={labItem.id}
            title={labItem.title}
            hasButton
            desc={labItem.desc}
            className="w-full"
            icon={labItem.icon}
            hasRegister
            slug={labItem?.slug}
            subTitle={labItem.subtitle}
            departmentSlug="laboratories"
          />
        ))}
      </div>
    </div>
  );
}

export default ChooseLab;
