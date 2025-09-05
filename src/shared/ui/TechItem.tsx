interface TechItemProps {
  title: string;
  desc: string;
}

function TechItem({ title, desc }: TechItemProps) {
  return (
    <div className="tech-item border rounded-2xl p-6 flex flex-col 2xl:flex-row 2xl:items-center gap-6">
      <div className="left-title text-xl 2xl:max-w-1/2">{title}</div>

      <div className="right-desc text-gray-400 text-sm 2xl:max-w-1/2 line-clamp-2 mt-auto 2xl:mt-0">
        {desc}
      </div>
    </div>
  );
}

export default TechItem;
