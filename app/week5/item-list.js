"use client";

import { useState } from "react";
import Item from "./item";
import itemData from "./item.json";
import SortButton from "./sort-button";

export default function ItemList() {
  const [sortBy, setSortBy] = useState("name");
  const [condition, setCondition] = useState("false");
  console.log(condition);
  let items = itemData.map((item) => ({ ...item }));

  // const sortedByNameItems = (item1, item2) => {
  //   return item1.name.localeCompare(item2.name);
  // };

  // const sortedByCategoryItems = (item1, item2) => {
  //   const categoryOrder = item1.category.localeCompare(item2.category);
  //   if (categoryOrder === 0) {
  //     return item1.name.localeCompare(item2.name);
  //   }
  //   return categoryOrder;
  // };

  // if (sortBy === "name") {
  //   items.sort(sortedByNameItems);
  // } else if (sortBy === "category") {
  //   items.sort(sortedByCategoryItems);
  // }

  const sortedArrayBy = (item1, item2) => {
    const order = item1[sortBy].localeCompare(item2[sortBy]);
    if (order === 0) {
      return item1.name.localeCompare(item2.name);
    }
    return order;
  };

  const groupByCategory = items.filter((item) => item.category === "Beverages");

  if (sortBy === "group") {
    setCondition("true");
  } else {
    items.sort(sortedArrayBy);
  }

  let uniqueCategory = [...new Set(items.map((item) => item.category))];
  uniqueCategory = uniqueCategory.sort();
  console.log;

  return (
    <>
      <div>
        <SortButton
          currentSort={sortBy}
          onClick={() => setSortBy("name")}
          sortType='name'
        >
          Name
        </SortButton>
        <SortButton
          currentSort={sortBy}
          onClick={() => setSortBy("category")}
          sortType='category'
        >
          Category
        </SortButton>
        <SortButton
          currentSort={sortBy}
          onClick={() => setSortBy("group")}
          sortType='group'
        >
          Group By Category
        </SortButton>
      </div>
      {condition === "false" ? (
        <div>
          {items.map((item) => (
            <Item item={item} key={item.id} />
          ))}
        </div>
      ) : null}
    </>
  );
}
