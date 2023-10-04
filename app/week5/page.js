import ItemList from "./item-list.js";

export default function Page() {
  return (
    <main className='bg-orange-100 p-2'>
      <div>
        <h2 className='text-3xl font-bold m-4'>Shopping List</h2>
        <ul>
          <ItemList />
        </ul>
      </div>
    </main>
  );
}
