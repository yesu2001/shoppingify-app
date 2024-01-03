import React, { useState } from "react";
import logo from "../assets/logo.svg";
import { IoCartOutline } from "react-icons/io5";
import { TfiMenuAlt } from "react-icons/tfi";
import { LuHistory } from "react-icons/lu";
import { MdOutlineQueryStats } from "react-icons/md";

export default function SideBar({ activeTab, setActiveTab }) {
  return (
    <div className="flex-[0.05] bg-white flex flex-col">
      <div className="flex-[0.1] flex items-center justify-center pt-6">
        <img src={logo} alt="logo" />
      </div>
      <div className="flex-[1] flex flex-col justify-center space-y-10">
        <div
          className={`flex justify-center cursor-pointer ${
            activeTab === "items" && "border-l-4 border-[#F9A109]"
          }`}
          onClick={() => setActiveTab("items")}
        >
          <TfiMenuAlt className=" w-[30px] h-[30px]" />
        </div>
        <div
          className={`flex justify-center cursor-pointer ${
            activeTab === "history" && "border-l-4 border-[#F9A109]"
          }`}
          onClick={() => setActiveTab("history")}
        >
          <LuHistory className="w-[30px] h-[30px]" />
        </div>
        <div
          className={`flex justify-center cursor-pointer ${
            activeTab === "stats" && "border-l-4 border-[#F9A109]"
          }`}
          onClick={() => setActiveTab("stats")}
        >
          <MdOutlineQueryStats className="w-[30px] h-[30px]" />
        </div>
      </div>
      <div className="flex-[0.1] flex items-center justify-center pb-6">
        <div className="bg-[#F9A109] p-2 rounded-full">
          <IoCartOutline className="text-white w-[30px] h-[30px]" />
        </div>
      </div>
    </div>
  );
}
