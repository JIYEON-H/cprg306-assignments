"use client";

import { useState } from "react";
import Item from "./item";
import itemData from "./item.json";
import SortBUtton from "./sort-button";

export default function ItemList() {
  const [sortBy, setSortBy] = useState("name");

  let items = itemData.map((item) => ({ ...item }));

  const sortedByNameItems = (item1, item2) => {
    return item1.name.localeCompare(item2.name);
  };

  const sortedByCategoryItems = (item1, item2) => {
    const categoryOrder = item1.category.localeCompare(item2.category);
    if (categoryOrder === 0) {
      return item1.name.localeCompare(item2.name);
    }
    return categoryOrder;
  };

  if (sortBy === "name") {
    items.sort(sortedByNameItems);
  } else if (sortBy === "category") {
    items.sort(sortedByCategoryItems);
  }

  return (
    <>
      <div>
        <SortBUtton currentSort={sortBy} onClick={() => setSortBy("name")}>
          Name
        </SortBUtton>
        <SortBUtton currentSort={sortBy} onClick={() => setSortBy("category")}>
          Category
        </SortBUtton>
      </div>
      <div>
        {items.map((item) => (
          <Item
            name={item.name}
            quantity={item.quantity}
            category={item.category}
            key={item.id}
          />
        ))}
      </div>
    </>
  );
}
