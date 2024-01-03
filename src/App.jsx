import { useEffect, useState } from "react";
import SideBar from "./components/SideBar";
import CenterComponent from "./components/CenterComponent";
import RightComponent from "./components/RightComponent";
import { itemsList as itemsData, shoppingList } from "./lib/data";
import { addNewNewItem } from "./lib/helpers";

function App() {
  const [activeTab, setActiveTab] = useState("items");
  const [itemData, setItemData] = useState(null);
  const [itemsList, setItemsList] = useState([]);
  const [shoppingCart, setShoppingCart] = useState({});

  function handleAddNewItem(data) {
    addNewNewItem(data, itemsList, setItemsList);
  }

  function handleAddToCart(data) {
    console.log(data);
    const itemData = {
      itemName: data.name,
      category: data.category,
      quantity: 1,
    };
    setShoppingCart((prevState) => ({
      ...prevState,
      items: [...prevState.items, itemData],
    }));
    // shoppingCart.items.push(itemData);
    // console.log(itemData);
    console.log(shoppingCart);
  }

  useEffect(() => {
    setItemsList(itemsData);
    setShoppingCart(shoppingList);
  }, []);

  return (
    <div className="font-sans w-full flex min-h-screen bg-[#FAFAFE]">
      <SideBar activeTab={activeTab} setActiveTab={setActiveTab} />
      <CenterComponent
        activeTab={activeTab}
        setItemData={setItemData}
        itemsList={itemsList}
        handleAddToCart={handleAddToCart}
      />
      <RightComponent
        setItemData={setItemData}
        itemData={itemData}
        handleAddNewItem={handleAddNewItem}
        shoppingCart={shoppingCart}
      />
    </div>
  );
}

export default App;
