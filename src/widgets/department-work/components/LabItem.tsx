interface LabItemProps {
  order: number;
  title: string;
}

function LabItem({ order, title }: LabItemProps) {
  return (
    <div className="lab-item border rounded-2xl p-6 flex flex-col md:flex-row md:items-center gap-6 md:gap-8">
      <div className="left-side md:size-20 md:flex md:items-center md:justify-center shrink-0 text-theprimary text-2xl">
        {order}
      </div>

      <div className="right-side text-xl overflow-hidden text-ellipsis break-words">
        {title}
      </div>
    </div>
  );
}

export default LabItem;
