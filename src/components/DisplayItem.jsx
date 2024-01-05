import React from "react";
import { IoMdArrowBack } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";

export default function DisplayItem({ setItemData, data }) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ x: "100%", opacity: 0 }}
        animate={{
          x: 0,
          opacity: 1,
          transition: { duration: 0.5, ease: "easeInOut" },
        }}
        exit={{
          x: "-100%",
          opacity: 0,
          transition: { duration: 0.5, ease: "easeInOut" },
        }}
        className={`h-full p-8 ${!data && "hidden"} bg-white`}
      >
        <div
          className="flex cursor-pointer items-center gap-2 text-[#F9A109] font-semibold text-sm"
          onClick={() => setItemData(null)}
        >
          <IoMdArrowBack />
          <p>back</p>
        </div>
        <div className="space-y-3 my-4">
          <div>
            <img
              src={data?.image}
              al="pisc"
              width={"100%"}
              height={200}
              className="rounded-[25px]"
            />
          </div>
          <div className="space-y-1">
            <label className="text-[#C1C1C4] text-xs">Name</label>
            <p>{data?.name}</p>
          </div>
          <div>
            <label className="text-[#C1C1C4] text-xs">Category</label>
            <p>{data?.category}</p>
          </div>
          <div>
            <label className="text-[#C1C1C4] text-xs">Note</label>
            <p>{data?.note}</p>
          </div>
          <div className="flex items-center justify-center gap-8 absolute bottom-4 right-[5%]">
            <button className="font-600">delete</button>
            <button className="bg-[#F9A109] px-3 py-2 text-white rounded-md">
              Add to list
            </button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
