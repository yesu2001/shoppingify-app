import React from "react";
import { IoMdArrowBack } from "react-icons/io";

export default function DisplayItem() {
  return (
    <div className="h-full p-8">
      <div className="flex cursor-pointer items-center gap-2 text-[#F9A109] font-semibold text-sm">
        <IoMdArrowBack />
        <p>back</p>
      </div>
      <div className="space-y-3">
        <div>
          <img
            src="https://shorturl.at/uGOR6"
            al="pisc"
            width={"100%"}
            height={200}
            className="rounded-[25px]"
          />
        </div>
        <div className="space-y-1">
          <label className="text-[#C1C1C4] text-xs">Name</label>
          <p>Avocado</p>
        </div>
        <div>
          <label className="text-[#C1C1C4] text-xs">Category</label>
          <p>Fruit</p>
        </div>
        <div>
          <label className="text-[#C1C1C4] text-xs">Note</label>
          <p>
            Nutrient-dense foods are those that provide substantial amounts of
            vitamins, minerals and other nutrients with relatively few calories.
            One-third of a medium avocado (50 g) has 80 calories and contributes
            nearly 20 vitamins and minerals, making it a great nutrient-dense
            food choice.
          </p>
        </div>
        <div className="flex items-center justify-center gap-8">
          <button className="font-600">delete</button>
          <button className="bg-[#F9A109] px-3 py-2 text-white rounded-md">
            Add to list
          </button>
        </div>
      </div>
    </div>
  );
}
