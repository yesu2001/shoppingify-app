import React from "react";
import { IoMdSearch } from "react-icons/io";

export default function Header() {
  return (
    <div className="flex justify-between py-6">
      <p className="font-semibold text-[#34333A] text-2xl w-[50%]">
        <span className="text-[#F9A109]">Shoppingify </span>
        allows you take your shopping list wherever you go
      </p>
      <div>
        <div className="flex items-center bg-white gap-2 px-4 py-2 rounded-md shadow-md">
          <IoMdSearch className="w-[20px] h-[20px] mt-1" />
          <input
            type="text"
            placeholder="search items.."
            className="outline-none"
          />
        </div>
      </div>
    </div>
  );
}
