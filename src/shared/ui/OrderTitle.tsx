import { cn } from "@/lib/utils";

function OrderTitle({
  order,
  title,
  titleClassName,
}: {
  order: number;
  title: string;
  titleClassName?: string;
}) {
  return (
    <div className="order-title border p-6 rounded-2xl flex items-center gap-6 md:gap-8">
      <div className="order-wrapper size-8 md:size-24 text-2xl flex shrink-0 items-center justify-center text-theprimary">
        {order}
      </div>

      <div className={cn("title text-xl pr-6 break-words", titleClassName)}>
        {title}
      </div>
    </div>
  );
}

export default OrderTitle;
