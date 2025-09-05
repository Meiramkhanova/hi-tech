interface TechItemProps {
  title: string;
  desc: string;
}

function TechItem({ title, desc }: TechItemProps) {
  return (
    <div className="tech-item border rounded-2xl p-6 flex items-center gap-6">
      <div className="left-title text-xl max-w-1/2">{title}</div>

      <div className="right-desc text-gray-400 text-sm  max-w-1/2 line-clamp-2">
        {desc}
      </div>
    </div>
  );
}

export default TechItem;
