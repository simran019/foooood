"use client";

import { useState } from "react";
import CategoryComponent from "./Category";
import { ICategoryItem, categoryItems } from "@/lib/data";

export default function CategoryItemsComponent() {
  const [items, setItems] = useState<ICategoryItem[]>([]);

  function handleCategoryClick(key: string) {
    setItems(categoryItems[key]);
  }
  return (
    <>
      <div>
        <div className="menu-category">Menu Category</div>
        <div className="cat" id="cat">
          <CategoryComponent handleClick={handleCategoryClick} />
        </div>
      </div>
      <div className="food-choice" id="food-choice">
        {items.map((item) => (
          <div>{item.itemName}</div>
        ))}
      </div>
    </>
  );
}
