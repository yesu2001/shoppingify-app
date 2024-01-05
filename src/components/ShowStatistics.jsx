import React from "react";
import { stats } from "../lib/data";

export default function ShowStatistics() {
  return (
    <div className="w-full h-full my-10">
      <div className="md:flex items-center gap-4">
        <div className="flex-[0.5]">
          <p className="text-2xl font-semibold">{stats.items.name}</p>
          <div className="my-4 space-y-4">
            {stats.items.items.map((item) => (
              <div className="space-y-2 mr-10">
                <div className="flex items-center justify-between">
                  <p className="text-sm">{item.name}</p>
                  <p className="font-semibold">{item.percent}%</p>
                </div>
                <div className="h-[8px] w-full bg-[#E0E0E0] rounded-xl overflow-hidden">
                  <div
                    className={`h-full bg-[#F9A109]`}
                    style={{ width: `${item.percent}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex-[0.5]">
          <p className="text-2xl font-semibold">{stats.category.name}</p>
          <div className="my-4 space-y-4">
            {stats.category.items.map((item) => (
              <div className="space-y-2 mr-10">
                <div className="flex items-center justify-between">
                  <p className="text-sm">{item.name}</p>
                  <p className="font-semibold">{item.percent}%</p>
                </div>
                <div className="h-[8px] w-full bg-[#E0E0E0] rounded-xl overflow-hidden">
                  <div
                    className={`h-full bg-[#56CCF2]`}
                    style={{ width: `${item.percent}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
