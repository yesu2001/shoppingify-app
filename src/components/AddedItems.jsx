import React, { useEffect, useState } from "react";
import { MdEdit, MdDeleteOutline } from "react-icons/md";
import { BsDash } from "react-icons/bs";
import { IoMdAdd } from "react-icons/io";
import pic from "../assets/source.svg";
import { history } from "../lib/data";

export default function AddedItems({ setOpen, shoppingCart, setShoppingCart }) {
  const [isHovered, setIsHovered] = useState(false);
  const [edit, setEdit] = useState(false);
  const [openComplete, setOpenComplete] = useState(false);
  const [openConfirm, setOpenConfirm] = useState(false);
  const [cartName, setCartName] = useState("");
  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useState({});

  useEffect(() => {
    const groupedItems = shoppingCart?.items?.reduce((acc, item) => {
      acc[item.category] = acc[item.category] || [];
      acc[item.category].push(item);
      return acc;
    }, {});

    if (groupedItems) {
      setCart(groupedItems);
    }

    setLoading(false);
  }, [shoppingCart]);

  const isEmpty = Object.keys(shoppingCart).length === 0;

  const handleRemoveFromCart = (itemToRemove) => {
    setCart((prevCart) => {
      const updatedCart = { ...prevCart }; // Create a new object to avoid mutation

      for (const category in updatedCart) {
        const items = updatedCart[category];
        const updatedItems = items.filter((item) => {
          return (
            item.itemName !== itemToRemove.itemName ||
            item.category !== itemToRemove.category ||
            item.quantity !== itemToRemove.quantity
          );
        });
        updatedCart[category] = updatedItems;
      }

      return updatedCart; // Return the updated cart object to set the state
    });
  };

  const handleIncrease = (itemToIncrease) => {
    setCart((prevCart) => {
      const updatedCart = { ...prevCart };

      for (const category in updatedCart) {
        const items = updatedCart[category];
        const updatedItems = items.map((item) =>
          item.itemName === itemToIncrease.itemName
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
        updatedCart[category] = updatedItems;
      }

      return updatedCart;
    });
  };

  const handleDecrease = (itemToDecrease) => {
    setCart((prevCart) => {
      const updatedCart = { ...prevCart };

      for (const category in updatedCart) {
        const items = updatedCart[category];
        const updatedItems = items.map((item) =>
          item.itemName === itemToDecrease.itemName
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
        updatedCart[category] = updatedItems;
      }

      return updatedCart;
    });
  };

  const handleSave = () => {
    setShoppingCart((prevState) => ({
      ...prevState,
      name: cartName,
    }));
    setCartName("");
  };

  const handleConfirm = () => {
    history.push(shoppingCart);
    setShoppingCart({});
    setCart({});
    setOpenComplete(false);
    setOpenConfirm(false);
    console.log(history);
  };

  return (
    <div className="relative h-full bg-[#FFF0DE]">
      <div className="height-[200px] bg-[#80485B] flex items-center rounded-xl gap-4 px-4 py-2">
        <div className="relative">
          <img src={pic} className="mt-[-25px] h-[150px] w-[80px]" />
        </div>
        <div className="space-y-2">
          <p className="text-white">Didn’t find what you need?</p>
          <button
            className="bg-white px-4 py-2 rounded-lg"
            onClick={() => setOpen(true)}
          >
            Add item
          </button>
        </div>
      </div>
      {Object.keys(shoppingCart).length === 0 && (
        <p className="text-slate-600 my-6 text-sm text-center">
          Shopping cart is Empty. Add items to the list!
        </p>
      )}
      {loading && isEmpty && <p>Loading cart</p>}

      {!isEmpty && !loading && (
        <>
          <div className="my-6 flex items-center justify-between">
            <p className="font-semibold text-xl">{shoppingCart?.name}</p>
            <MdEdit
              className="text-2xl"
              onClick={() => setOpenComplete(true)}
            />
          </div>
          <div className="space-y-4 h-[50vh] overflow-auto scrollbar-hide">
            {Object.entries(cart).map(([category, items]) => (
              <div key={category} className="space-y-4">
                <p className="text-[#828282]">{category}</p>
                <div className="space-y-3">
                  {items.map((item, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center"
                    >
                      <p>{item.itemName}</p>
                      <div className="group relative">
                        <button
                          className={`rounded-2xl border border-[#F9A109] px-2 text-center text-[#F9A109] ${
                            edit ? "hidden" : ""
                          }`}
                          onClick={() => setEdit(true)}
                        >
                          {item.quantity} pcs
                        </button>
                        <div
                          className={`${
                            edit ? "" : "hidden"
                          } opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-3 bg-white p-0 rounded-lg overflow-hidden`}
                        >
                          <button
                            className=" bg-[#F9A109] rounded-lg p-1"
                            onClick={() => handleRemoveFromCart(item)}
                          >
                            <MdDeleteOutline className="text-2xl text-white" />
                          </button>
                          <div className="flex items-center gap-1 p-1 text-xs text-[#F9A109]">
                            <button onClick={() => handleDecrease(item)}>
                              <BsDash className="font-bolder" />
                            </button>
                            <p className="rounded-2xl border border-[#F9A109] px-2 text-center text-[#F9A109]">
                              {item.quantity} pcs
                            </p>
                            <button onClick={() => handleIncrease(item)}>
                              <IoMdAdd />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </>
      )}
      <div className="absolute bottom-[-26px] left-[-30px] right-[-30px] bg-white h-[80px]">
        <div className="h-full flex items-center justify-center">
          {openComplete ? (
            <div className="flex items-center gap-8">
              <button onClick={() => setOpenComplete(false)}>cancel</button>
              <button
                className="bg-[#56CCF2] text-white py-2 px-6 rounded-lg"
                onClick={() => setOpenConfirm(true)}
              >
                Complete
              </button>
            </div>
          ) : (
            <div className="border-2 border-[#F9A109] h-10 rounded-lg overflow-hidden">
              <input
                type="text"
                placeholder="Enter a name"
                value={cartName}
                onChange={(e) => setCartName(e.target.value)}
                className="h-full outline-none px-2"
              />
              <button
                className="bg-[#F9A109] text-white h-full px-2 border-2 border-[#F9A109] rounded-md"
                onClick={handleSave}
              >
                save
              </button>
            </div>
          )}
        </div>
      </div>
      {openConfirm && (
        <Modal
          openConfirm={openComplete}
          setOpenConfirm={setOpenConfirm}
          handleConfirm={handleConfirm}
        />
      )}
    </div>
  );
}

function Modal({ openConfirm, setOpenConfirm, handleConfirm }) {
  const handleClose = () => setOpenConfirm(false);

  return (
    <div
      className={`fixed z-50 inset-0 overflow-y-auto ${
        openConfirm ? "" : "hidden"
      }`}
    >
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div
          className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
          onClick={handleClose}
        ></div>

        <span
          className="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
        >
          &#8203;
        </span>

        <div className="relative inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full md:w-[350px]">
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <p>Are you sure that you want to cancel this list?</p>
          </div>

          <div className="px-4 py-3 flex item-center justify-end gap-4">
            <button type="button" onClick={handleClose}>
              cancel
            </button>
            <button
              onClick={handleConfirm}
              className="bg-[#EB5757] rounded-md px-4 py-2 text-white"
            >
              Yes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
