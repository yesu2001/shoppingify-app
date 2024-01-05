import React, { useState } from "react";
import { motion } from "framer-motion";
import AddedItems from "./AddedItems";
import AddNewItem from "./AddNewItem";
import DisplayItem from "./DisplayItem";

export default function RightComponent({
  setItemData,
  itemData,
  handleAddNewItem,
  shoppingCart,
  setShoppingCart,
  openCart,
}) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      initial={{ x: "100%", opacity: 0 }}
      animate={{
        x: 0,
        opacity: 1,
        transition: { duration: 0.5, ease: "easeInOut" },
      }}
      exit={{
        x: "-100%",
        opacity: 0,
        transition: { duration: 0.5, ease: "easeInOut" },
      }}
      className="w-full h-full"
    >
      {itemData || openCart ? (
        <DisplayItem
          open={open}
          openCart={openCart}
          setItemData={setItemData}
          data={itemData}
        />
      ) : (
        <ShowOther
          open={open}
          setOpen={setOpen}
          handleAddNewItem={handleAddNewItem}
          shoppingCart={shoppingCart}
          setShoppingCart={setShoppingCart}
        />
      )}
    </motion.div>
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
        <div className="w-full h-full bg-[#FFF0DE] p-8">
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
