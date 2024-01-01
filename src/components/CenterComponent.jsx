import React from "react";
import Header from "./Header";
import Items from "./Items";

export default function CenterComponent() {
  return (
    <div className="flex-[0.70] space-y-6 px-[100px]">
      <div>
        <Header />
      </div>
      <div>
        <Items />
      </div>
    </div>
  );
}
