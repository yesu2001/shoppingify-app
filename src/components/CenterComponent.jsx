import React from "react";
import ShowItems from "./ShowItems";
import ShowHistory from "./ShowHistory";
import ShowStatistics from "./ShowStatistics";

export default function CenterComponent({
  activeTab,
  setItemData,
  itemsList,
  handleAddToCart,
}) {
  return (
    <div className="flex-[0.70] space-y-6 px-[100px]">
      {activeTab === "items" && (
        <ShowItems
          setItemData={setItemData}
          itemsList={itemsList}
          handleAddToCart={handleAddToCart}
        />
      )}
      {activeTab === "history" && <ShowHistory />}
      {activeTab === "stats" && <ShowStatistics />}
    </div>
  );
}
