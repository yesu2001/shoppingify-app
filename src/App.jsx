import { useEffect, useState } from "react";
import SideBar from "./components/SideBar";
import CenterComponent from "./components/CenterComponent";
import RightComponent from "./components/RightComponent";
import { itemsList as itemsData, shoppingList, history } from "./lib/data";
import { addNewNewItem, fetchAllData } from "./lib/helpers";
import { generateUUID } from "./lib/utils";

function App() {
  const [activeTab, setActiveTab] = useState("items");
  const [itemData, setItemData] = useState(null);
  const [itemsList, setItemsList] = useState([]);
  const [shoppingCart, setShoppingCart] = useState({});
  const [historyData, setHistoryData] = useState([]);

  function handleAddNewItem(data) {
    addNewNewItem(data, itemsList, setItemsList);
  }

  function handleAddToCart(data) {
    const itemData = {
      itemName: data.name,
      category: data.category,
      quantity: 1,
    };

    if (Object.keys(shoppingCart).length === 0) {
      const newShoppingCart = {
        id: generateUUID(),
        name: "Shopping List",
        items: [itemData],
      };
      setShoppingCart(newShoppingCart);
      return;
    }
    setShoppingCart((prevState) => ({
      ...prevState,
      items: [...prevState.items, itemData],
    }));
  }

  useEffect(() => {
    const { itemsData, cartData, historyData } = fetchAllData();
    setItemsList(itemsData);
    setShoppingCart(cartData);
    setHistoryData(historyData);
  }, []);

  return (
    <div className="font-sans w-full flex min-h-screen bg-[#FAFAFE]">
      <SideBar activeTab={activeTab} setActiveTab={setActiveTab} />
      <CenterComponent
        activeTab={activeTab}
        setItemData={setItemData}
        itemsList={itemsList}
        handleAddToCart={handleAddToCart}
        historyData={historyData}
      />
      <RightComponent
        setItemData={setItemData}
        itemData={itemData}
        handleAddNewItem={handleAddNewItem}
        shoppingCart={shoppingCart}
        setShoppingCart={setShoppingCart}
      />
    </div>
  );
}

export default App;
