import ItemList from "./item-list";

export default function Page() {
  return (
    <main className='bg-orange-100 p-2'>
      <div>
        <h2 className='text-3xl font-bold m-2'>Shopping List</h2>
        <ul>
          <ItemList />
        </ul>
      </div>
    </main>
  );
}
