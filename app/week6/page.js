"use client";

import ItemList from "./item-list.js";
import NewItem from "./new-item.js";
import itemData from "./item.json";
import SortButton from "./sort-button";
import { useState } from "react";

export default function Page() {
  const [items, setItems] = useState(itemData.map((item) => ({ ...item })));
  const [newEventOpen, setNewEventOpen] = useState(false);

  const handleAddItem = (newItem) => {
    setItems((current) => [...current, newItem]);
  };

  return (
    <main className='bg-orange-100 p-2'>
      <div>
        <h2 className='text-3xl font-bold m-4'>Shopping List</h2>
        <NewItem onAddItem={handleAddItem} />
        <ul>
          <ItemList items={items} />
        </ul>
      </div>
    </main>
  );
}
