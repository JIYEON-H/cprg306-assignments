"use client";

import MealIdeas from "./meal-ideas.js";
import ItemList from "./item-list.js";
import NewItem from "./new-item.js";
import itemData from "./item.json";
import SortButton from "./sort-button";
import { useState } from "react";

export default function Page() {
  const [items, setItems] = useState(itemData.map((item) => ({ ...item })));
  //const [newEventOpen, setNewEventOpen] = useState(false);
  const [selectedItemName, setSelectedItemName] = useState("");

  const handleAddItem = (newItem) => {
    setItems((current) => [...current, newItem]);
  };

  const handleItemSelect = (item) => {
    let itemName;
    let cleanName;

    if (item.name.includes(",")) {
      itemName = item.name.split(",");
      cleanName = itemName[0].trim();
    } else {
      itemName = item.name.split(" ");
      cleanName = itemName[0].trim();
    }
    let withOutEmoji = cleanName.replace(/[\u{1F600}-\u{1F6FF}]/gu, "");
    setSelectedItemName(withOutEmoji);
  };

  return (
    <main className='bg-orange-100 p-2 flex'>
      <div>
        <h2 className='text-3xl font-bold m-4'>Shopping List</h2>
        <NewItem onAddItem={handleAddItem} />
        <ul>
          <ItemList items={items} onItemSelect={handleItemSelect} />
        </ul>
      </div>
      <div>
        <MealIdeas ingredient={selectedItemName} />
      </div>
    </main>
  );
}
