import React from "react";
import { IoMdAdd } from "react-icons/io";

export default function Item({ data }) {
  return (
    <div className="space-y-4">
      <p className="font-semibold">{data.name}</p>
      <div className="flex items-center gap-4 ">
        {data.items.map((item, index) => (
          <div
            key={index}
            className="flex-[0.25] shadow-md flex items-center justify-between bg-white py-2 px-4 rounded-md"
          >
            <p className="cursor-pointer">{item.name}</p>
            <button>
              <IoMdAdd className="text-[#C1C1C4]" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
