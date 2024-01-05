import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import SideBar from "./components/SideBar";
import CenterComponent from "./components/CenterComponent";
import RightComponent from "./components/RightComponent";
import {
  containerVariants,
  sidebarVariants,
  centerComponentVariants,
  rightComponentVariants,
} from "./lib/animations";
import { addNewNewItem, fetchAllData } from "./lib/helpers";
import { generateUUID } from "./lib/utils";

function App() {
  const [activeTab, setActiveTab] = useState("items");
  const [itemData, setItemData] = useState(null);
  const [itemsList, setItemsList] = useState([]);
  const [shoppingCart, setShoppingCart] = useState({});
  const [historyData, setHistoryData] = useState([]);
  const [openCart, setOpenCart] = useState(false);

  const containerAnimation = useAnimation();
  const sidebarAnimation = useAnimation();
  const centerComponentAnimation = useAnimation();
  const rightComponentAnimation = useAnimation();

  const animateComponents = async () => {
    await containerAnimation.start("visible");
    await sidebarAnimation.start("visible");
    await centerComponentAnimation.start("visible");
    await rightComponentAnimation.start("visible");
  };

  useEffect(() => {
    animateComponents();
  }, []);

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
    <motion.div
      className="font-sans flex min-h-screen bg-[#FAFAFE]"
      initial="hidden"
      animate={containerAnimation}
      variants={containerVariants}
    >
      <motion.div
        initial="hidden"
        animate={sidebarAnimation}
        variants={sidebarVariants}
        className="w-[50px] md:flex-[0.05] flex min-h-screen fixed top-0 bottom-0 left-0"
      >
        <SideBar
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          openCart={openCart}
          setOpenCart={setOpenCart}
        />
      </motion.div>
      <motion.div
        initial="hidden"
        animate={centerComponentAnimation}
        variants={centerComponentVariants}
        className="flex-[1] ml-16"
      >
        {openCart ? (
          <div className={`md:hidden h-full`}>
            <RightComponent
              setItemData={setItemData}
              itemData={itemData}
              handleAddNewItem={handleAddNewItem}
              shoppingCart={shoppingCart}
              setShoppingCart={setShoppingCart}
              openCart={openCart}
            />
          </div>
        ) : (
          <CenterComponent
            activeTab={activeTab}
            setItemData={setItemData}
            itemsList={itemsList}
            handleAddToCart={handleAddToCart}
            historyData={historyData}
            setOpenCart={setOpenCart}
          />
        )}
      </motion.div>
      <motion.div
        initial="hidden"
        animate={rightComponentAnimation}
        variants={rightComponentVariants}
        className={`hidden flex-[0.35] md:block`}
      >
        <RightComponent
          setItemData={setItemData}
          itemData={itemData}
          handleAddNewItem={handleAddNewItem}
          shoppingCart={shoppingCart}
          setShoppingCart={setShoppingCart}
        />
      </motion.div>
    </motion.div>
  );
}

export default App;
