export default function Item({ name, quantity, category }) {
  return (
    <li className='p-2 m-4 bg-orange-200 max-w-sm'>
      <h2 className='text-xl font-bold'>{name}</h2>
      <div className='text-sm pb-2'>
        Buy {quantity} in {category}
      </div>
    </li>
  );
}
