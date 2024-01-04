import React, { useState } from "react";
import AddedItems from "./AddedItems";
import AddNewItem from "./AddNewItem";
import DisplayItem from "./DisplayItem";

export default function RightComponent({
  setItemData,
  itemData,
  handleAddNewItem,
  shoppingCart,
  setShoppingCart,
}) {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex-[0.25] ">
      {itemData ? (
        <DisplayItem open={open} setItemData={setItemData} data={itemData} />
      ) : (
        <ShowOther
          open={open}
          setOpen={setOpen}
          handleAddNewItem={handleAddNewItem}
          shoppingCart={shoppingCart}
          setShoppingCart={setShoppingCart}
        />
      )}
    </div>
  );
}

const ShowOther = ({
  open,
  setOpen,
  handleAddNewItem,
  shoppingCart,
  setShoppingCart,
}) => {
  return (
    <>
      {open ? (
        <AddNewItem setOpen={setOpen} handleAddNewItem={handleAddNewItem} />
      ) : (
        <div className="h-full bg-[#FFF0DE] p-8">
          <AddedItems
            setOpen={setOpen}
            shoppingCart={shoppingCart}
            setShoppingCart={setShoppingCart}
          />
        </div>
      )}
    </>
  );
};
