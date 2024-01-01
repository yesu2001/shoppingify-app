import React from "react";
import { MdEdit } from "react-icons/md";
import pic from "../assets/source.svg";
import { shoppingCart } from "../lib/data";

export default function AddedItems() {
  const fruitsList = shoppingCart.filter((item) => item.category === "Fruits");
  const vegetablesList = shoppingCart.filter(
    (item) => item.category === "Vegetables"
  );
  const beveragesList = shoppingCart.filter(
    (item) => item.category === "Beverages"
  );
  const meatList = shoppingCart.filter((item) => item.category === "Meat");

  return (
    <div className="relative h-full">
      <div className="height-[200px] bg-[#80485B] flex items-center rounded-xl gap-4 px-4 py-2">
        <div className="relative">
          <img src={pic} className="mt-[-25px] h-[150px] w-[80px]" />
        </div>
        <div className="space-y-2">
          <p className="text-white">Didn’t find what you need?</p>
          <button className="bg-white px-4 py-2 rounded-lg">Add item</button>
        </div>
      </div>
      <div className="my-6 flex items-center justify-between">
        <p className="font-semibold text-xl">Shopping list</p>
        <MdEdit className="text-2xl" />
      </div>
      <div className="space-y-4">
        {fruitsList.length > 0 && (
          <div className="space-y-2">
            <p className="text-[#828282]">Fruits</p>
            <div className="space-y-2">
              {fruitsList.map((item, index) => (
                <div key={index} className="flex justify-between items-center">
                  <p>{item.itemName}</p>
                  <button>{item.quantity}</button>
                </div>
              ))}
            </div>
          </div>
        )}
        {vegetablesList.length > 0 && (
          <div className="space-y-2">
            <p className="text-[#828282]">Vegetables</p>
            <div className="space-y-2">
              {vegetablesList.map((item, index) => (
                <div key={index} className="flex justify-between items-center">
                  <p>{item.itemName}</p>
                  <button>{item.quantity}</button>
                </div>
              ))}
            </div>
          </div>
        )}
        {meatList.length > 0 && (
          <div className="space-y-2">
            <p className="text-[#828282]">Meat</p>
            <div className="space-y-2">
              {meatList.map((item, index) => (
                <div key={index} className="flex justify-between items-center">
                  <p>{item.itemName}</p>
                  <button className="border border-[#F9A109] text-[#F9A109] text-sm text-center px-4 py-1 rounded-2xl">
                    {item.quantity} pcs
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      <div className="absolute bottom-[-26px] left-[-30px] right-[-30px] bg-white h-[100px]">
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
