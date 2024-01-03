import React from "react";
import ShowItems from "./ShowItems";
import ShowHistory from "./ShowHistory";

export default function CenterComponent() {
  return (
    <div className="flex-[0.70] space-y-6 px-[100px]">
      {/* <ShowItems /> */}
      <ShowHistory />
    </div>
  );
}
