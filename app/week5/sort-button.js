export default function SortBUtton({ currentSort, onClick, children }) {
  const isActive = currentSort === "name" || currentSort === "category";
  const buttonClassName = isActive
    ? "bg-orange-500 hover:bg-orange-600 focus:bg-orange-700 text-white font-bold py-2 px-4 rounded m-4"
    : "bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded m-4";

  return (
    <button className={buttonClassName} onClick={onClick}>
      {children}
    </button>
  );
}
