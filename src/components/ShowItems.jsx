import React from "react";
import Header from "./Header";
import Items from "./Items";

export default function ShowItems({
  setItemData,
  itemsList,
  handleAddToCart,
  setOpenCart,
}) {
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
          setOpenCart={setOpenCart}
        />
      </div>
    </div>
  );
}
