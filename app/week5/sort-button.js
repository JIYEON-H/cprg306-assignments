export default function SortButton({
  currentSort,
  onClick,
  children,
  sortType,
}) {
  const isActive = currentSort === sortType;

  const baseClassName =
    "bg-orange-500 text-white font-bold py-2 px-4 rounded m-4";

  const buttonClassName = isActive
    ? `${baseClassName} focus:bg-orange-700`
    : `${baseClassName} hover:bg-orange-600`;

  return (
    <button className={buttonClassName} onClick={onClick}>
      {children}
    </button>
  );
}
