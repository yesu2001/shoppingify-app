import React from "react";
import AddedItems from "./AddedItems";
import AddNewItem from "./AddNewItem";
import DisplayItem from "./DisplayItem";

export default function RightComponent() {
  return (
    <div className="flex-[0.25] ">
      {/* <div className="h-full bg-[#FFF0DE] p-8">
        <AddedItems />
      </div> */}
      {/* <AddNewItem /> */}
      <DisplayItem />
    </div>
  );
}
