import React from "react";
import { FaCalendarAlt } from "react-icons/fa";
import { MdNavigateNext } from "react-icons/md";

export default function ShowHistory({ historyData }) {
  return (
    <div className="py-6">
      <p className="text-bold text-2xl">Shopping History</p>
      {historyData.length > 0 ? (
        <div className="flex flex-col gap-8 my-8">
          <div className="space-y-3">
            <p className="text-xs">August 2023</p>
            <div className="flex flex-col gap-4">
              {historyData?.map((data) => (
                <div
                  key={data.id}
                  className="flex item-center justify-between bg-white px-4 py-2 rounded-md"
                >
                  <p>{data.name}</p>
                  <div className="flex items-center gap-6 text-xs">
                    <p className="flex items-center text-[#C1C1C4] gap-2 text-md">
                      <FaCalendarAlt />
                      Mon 12.8.23
                    </p>
                    <p className="text-[#56CCF2] border border-[#56CCF2] px-2 rounded-md">
                      Completed
                    </p>
                    <button className="text-[#F9A109] text-[30px]">
                      <MdNavigateNext />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <p className="my-6 text-slate-500">No Previous Lists!</p>
      )}
    </div>
  );
}
