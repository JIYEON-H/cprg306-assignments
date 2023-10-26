export default function Item({ item, onSelect }) {
  return (
    <li
      className='p-2 m-4 bg-orange-200 max-w-sm'
      onClick={() => onSelect(item)}
    >
      <h2 className='text-xl font-bold'>{item.name}</h2>
      <div className='text-sm pb-2'>
        Buy {item.quantity} in {item.category}
      </div>
    </li>
  );
}
