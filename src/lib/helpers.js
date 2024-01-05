import { itemsList, shoppingList, history } from "../lib/data";

export const fetchAllData = () => {
  // save data to local storage
  localStorage.setItem("shoppingCart", JSON.stringify(shoppingList));
  localStorage.setItem("itemsList", JSON.stringify(itemsList));
  localStorage.setItem("history", JSON.stringify(history));

  // get data from local storage
  const itemsData = localStorage.getItem("itemsList");
  const cartData = localStorage.getItem("shoppingCart");
  const historyData = localStorage.getItem("history");

  return {
    itemsData: JSON.parse(itemsData),
    cartData: JSON.parse(cartData),
    historyData: JSON.parse(historyData),
  };
};

export const addNewNewItem = (data, itemsList, setItemsList) => {
  console.log(data);
  const newItemsList = itemsList.map((item) =>
    item.name === data.category
      ? {
          ...item,
          items: [data, ...item.items],
        }
      : item
  );
  console.log(newItemsList);
  localStorage.setItem("itemsList", JSON.stringify(newItemsList));
  setItemsList(newItemsList);
};
