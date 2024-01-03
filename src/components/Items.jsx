import React from "react";
import Item from "./Item";

export default function Items({ setItemData, itemsList, handleAddToCart }) {
  return (
    <div className="space-y-8">
      {itemsList.map((item, index) => (
        <Item
          key={index}
          data={item}
          setItemData={setItemData}
          handleAddToCart={handleAddToCart}
        />
      ))}
    </div>
  );
}
