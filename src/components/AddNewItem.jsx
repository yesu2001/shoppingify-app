import React, { useState } from "react";

export default function AddNewItem() {
  const categories = ["Fruits", "Vegetables", "Meat", "Beverages"];
  const [itemData, setItemData] = useState({
    name: "",
    image: "",
    note: "",
    category: "",
  });

  const handleSetCategory = (item) => {};

  const handleChange = (e) => {
    setItemData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="bg-white h-full flex flex-col p-8">
      <p className="flex-[0.1] font-500 text-2xl">Add a new item</p>
      <form className="flex-[1] flex flex-col" onSubmit={handleSubmit}>
        <div className="flex-[0.9] space-y-4">
          <div className="flex flex-col gap-1">
            <label className="text-sm text-[#34333A]">Name</label>
            <input
              name="name"
              type="text"
              placeholder="Enter a name"
              value={itemData.name}
              onChange={handleChange}
              className="border-2 border-[#BDBDBD] p-2 rounded-lg outline-none"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-sm text-[#34333A]">Note(Optional)</label>
            <textarea
              name="note"
              type="text"
              placeholder="Enter a note"
              cols={6}
              value={itemData.note}
              onChange={handleChange}
              className="resize-none outline-none border-2 border-[#BDBDBD] p-2 rounded-lg"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-sm text-[#34333A]">Image (optional)</label>
            <input
              name="image"
              type="text"
              placeholder="Enter a Url"
              value={itemData.image}
              onChange={handleChange}
              className="border-2 border-[#BDBDBD] p-2 rounded-lg outline-none"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-sm text-[#34333A]">Category</label>
            <div>
              <input
                name="category"
                type="text"
                placeholder="Enter a category"
                value={itemData.category}
                onChange={handleChange}
                className="border-2 border-[#BDBDBD] p-2 rounded-lg outline-none w-full"
              />
              {itemData.category && (
                <div className="shadow-md p-2 rounded-md mt-2">
                  {categories.map((item, index) => (
                    <option
                      key={index}
                      value={item}
                      className="hover:bg-slate-200 px-2 py-1 rounded-md cursor-pointer"
                      onClick={() => handleSetCategory(item)}
                    >
                      {item}
                    </option>
                  ))}
                </div>
              )}
            </div>
            {/* <select
              placeholder="Enter a name"
              className="border-2 border-[#BDBDBD] p-2 rounded-lg outline-none"
            >
              {categories.map((item, index) => (
                <option key={index} value={item} className="">
                  {item}
                </option>
              ))}
            </select> */}
          </div>
        </div>
        <div className="flex-[0.1] flex gap-8 items-center justify-center">
          <button className="text-sm font-semibold">cancel</button>
          <input
            type="submit"
            value="Save"
            className="bg-[#F9A109] px-3 py-2 text-white rounded-md"
          />
        </div>
      </form>
    </div>
  );
}
