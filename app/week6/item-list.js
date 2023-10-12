"use client";

import { useState } from "react";
import Item from "./item";
//import itemData from "./item.json";
import SortButton from "./sort-button";

export default function ItemList({ items }) {
  const [sortBy, setSortBy] = useState("name");
  const [condition, setCondition] = useState("false");
  console.log(condition);

  //let items = itemData.map((item) => ({ ...item }));

  const sortedArrayBy = (item1, item2) => {
    const order = item1[sortBy].localeCompare(item2[sortBy]);
    if (order === 0) {
      return item1.name.localeCompare(item2.name);
    }
    return order;
  };

  if (sortBy === "group") {
    setCondition("true");
  } else {
    items.sort(sortedArrayBy);
  }

  let uniqueCategory = [...new Set(items.map((item) => item.category))];
  uniqueCategory = uniqueCategory.sort();
  console.log;

  const groupByCategory = items.filter((item) => item.category === "Beverages");

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
