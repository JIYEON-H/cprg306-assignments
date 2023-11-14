"use client";

import MealIdeas from "./meal-ideas.js";
import ItemList from "./item-list.js";
import NewItem from "./new-item.js";
import SortButton from "./sort-button";
import { useState, useEffect } from "react";
import { dbGetItems, addItem } from "../_services/shopping-list-service";
import { useUserAuth } from "../_utils/auth-context";

export default function Page() {
  const [items, setItems] = useState([]);
  //const [items, setItems] = useState(itemData.map((item) => ({ ...item })));
  //const [newEventOpen, setNewEventOpen] = useState(false);
  const [selectedItemName, setSelectedItemName] = useState("");
  const { user } = useUserAuth();

  const handleAddItem = (newItem) => {
    addItem(user.uid, newItem);
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

  //new!!!!!!!!!!!!!!!!!!!!!
  async function loadItems() {
    try {
      // setItems(getItems(user.uid));
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    // loadItems();
    if (user) {
      dbGetItems(user.uid, setItems);
    }
  }, [user]);

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
