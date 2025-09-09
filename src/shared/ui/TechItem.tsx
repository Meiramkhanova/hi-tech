interface TechItemProps {
  title: string;
  desc: string;
}

function TechItem({ title, desc }: TechItemProps) {
  return (
    <div className="tech-item border rounded-2xl p-6 grid grid-cols-1 2xl:grid-cols-2 items-center gap-6">
      <div className="left-title text-xl">{title}</div>

      <div className="right-desc text-gray-400 text-sm line-clamp-2 mt-auto 2xl:mt-0">
        {desc}
      </div>
    </div>
  );
}

export default TechItem;
