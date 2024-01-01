import React from "react";
import { itemsList } from "../lib/data";
import Item from "./Item";

export default function Items() {
  return (
    <div className="space-y-8">
      {itemsList.map((item, index) => (
        <Item key={index} data={item} />
      ))}
    </div>
  );
}
