import React, { useEffect, useState } from "react";
import { MdEdit } from "react-icons/md";
import pic from "../assets/source.svg";

export default function AddedItems({ setOpen, shoppingCart }) {
  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useState({});

  useEffect(() => {
    const groupedItems = shoppingCart?.items?.reduce((acc, item) => {
      acc[item.category] = acc[item.category] || [];
      acc[item.category].push(item);
      return acc;
    }, {});

    if (groupedItems) {
      setCart(groupedItems);
    }

    setLoading(false);
  }, [shoppingCart]);

  return (
    <div className="relative h-full bg-[#FFF0DE]">
      <div className="height-[200px] bg-[#80485B] flex items-center rounded-xl gap-4 px-4 py-2">
        <div className="relative">
          <img src={pic} className="mt-[-25px] h-[150px] w-[80px]" />
        </div>
        <div className="space-y-2">
          <p className="text-white">Didn’t find what you need?</p>
          <button
            className="bg-white px-4 py-2 rounded-lg"
            onClick={() => setOpen(true)}
          >
            Add item
          </button>
        </div>
      </div>
      {loading ? (
        <p>Loading cart</p>
      ) : (
        <>
          <div className="my-6 flex items-center justify-between">
            <p className="font-semibold text-xl">{shoppingCart?.name}</p>
            <MdEdit className="text-2xl" />
          </div>
          <div className="space-y-4 h-[50vh] overflow-auto">
            {Object.entries(cart).map(([category, items]) => (
              <div key={category} className="space-y-2">
                <p className="text-[#828282]">{category}</p>
                <div className="space-y-2">
                  {items.map((item, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center"
                    >
                      <p>{item.itemName}</p>
                      <button>{item.quantity}</button>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </>
      )}
      <div className="absolute bottom-[-26px] left-[-30px] right-[-30px] bg-white h-[80px]">
        <div className="h-full flex items-center justify-center">
          <div className="border-2 border-[#F9A109] h-10 rounded-lg overflow-hidden">
            <input
              type="text"
              placeholder="Enter a name"
              className="h-full outline-none px-2"
            />
            <button className="bg-[#F9A109] text-white h-full px-2 border-2 border-[#F9A109] rounded-md">
              save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
