interface FilterButtonProps {
  /** 리그 이름 */
  label: string;
}

function FilterButton({ label }: FilterButtonProps) {
  return (
    <button className="flex items-center gap-3 bg-pink-400 px-4 py-2 rounded-2xl text-white">
      <div className="size-6 bg-blue-200 rounded-full"></div>
      <span className="text-xs font-medium">{label}</span>
    </button>
  );
}

export default FilterButton;
