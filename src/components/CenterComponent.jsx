import React from "react";
import ShowItems from "./ShowItems";
import ShowHistory from "./ShowHistory";
import ShowStatistics from "./ShowStatistics";

export default function CenterComponent({
  activeTab,
  setItemData,
  itemsList,
  handleAddToCart,
  historyData,
  setOpenCart,
}) {
  return (
    <div className="space-y-3 px-[10px] md:space-y-6 md:px-[100px]">
      {activeTab === "items" && (
        <ShowItems
          setItemData={setItemData}
          itemsList={itemsList}
          handleAddToCart={handleAddToCart}
          setOpenCart={setOpenCart}
        />
      )}
      {activeTab === "history" && <ShowHistory historyData={historyData} />}
      {activeTab === "stats" && <ShowStatistics />}
    </div>
  );
}
