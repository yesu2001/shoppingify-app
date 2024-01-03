import React from "react";
import Header from "./Header";
import Items from "./Items";

export default function ShowItems({ setItemData, itemsList, handleAddToCart }) {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        <Items
          setItemData={setItemData}
          itemsList={itemsList}
          handleAddToCart={handleAddToCart}
        />
      </div>
    </div>
  );
}
