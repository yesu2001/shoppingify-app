import React, { useState } from "react";
import logo from "../assets/logo.svg";
import { IoCartOutline } from "react-icons/io5";
import { TfiMenuAlt } from "react-icons/tfi";
import { LuHistory } from "react-icons/lu";
import { MdOutlineQueryStats } from "react-icons/md";

export default function SideBar({
  activeTab,
  setActiveTab,
  openCart,
  setOpenCart,
}) {
  return (
    <div className="min-h-screen w-full bg-white flex flex-col">
      <div className="flex-[0.1] flex items-center justify-center pt-6">
        <img src={logo} alt="logo" className="w-[30px] md:w-[40px]" />
      </div>
      <div className="flex-[1] flex flex-col justify-center space-y-10">
        <div
          className={`flex justify-center cursor-pointer ${
            activeTab === "items" && "border-l-4 border-[#F9A109]"
          }`}
          onClick={() => {
            setActiveTab("items");
            setOpenCart(false);
          }}
        >
          <TfiMenuAlt className=" w-[30px] h-[30px]" />
        </div>
        <div
          className={`flex justify-center cursor-pointer ${
            activeTab === "history" && "border-l-4 border-[#F9A109]"
          }`}
          onClick={() => {
            setOpenCart(false);
            setActiveTab("history");
          }}
        >
          <LuHistory className="w-[30px] h-[30px]" />
        </div>
        <div
          className={`flex justify-center cursor-pointer ${
            activeTab === "stats" && "border-l-4 border-[#F9A109]"
          }`}
          onClick={() => {
            setOpenCart(false);
            setActiveTab("stats");
          }}
        >
          <MdOutlineQueryStats className="w-[30px] h-[30px]" />
        </div>
      </div>
      <div className="flex-[0.1] flex items-center justify-center pb-4">
        <button
          className="md:hidden bg-[#F9A109] p-2 rounded-full md:m-2"
          onClick={() => setOpenCart(!openCart)}
        >
          <IoCartOutline className="text-white md:w-[25px] md:h-[25px]" />
        </button>
      </div>
    </div>
  );
}
