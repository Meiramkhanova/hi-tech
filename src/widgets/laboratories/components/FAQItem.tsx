import { cn } from "@/lib/utils";

interface FAQItemProps {
  title: string;
  desc: string;
}

function FAQItem({ title, desc }: FAQItemProps) {
  return (
    <div className="faq-item border rounded-2xl p-6 flex flex-col gap-2">
      <div
        className={cn(
          "rounded-question size-8 bg-theprimary/10 text-theprimary rounded-2xl font-semibold",
          "flex shrink-0 items-center justify-center"
        )}>
        ?
      </div>

      <div className="faq-title font-medium">{title}</div>

      <div className="faq-desc text-gray-400">{desc}</div>
    </div>
  );
}

export default FAQItem;
