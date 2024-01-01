import { useState } from "react";
import SideBar from "./components/SideBar";
import CenterComponent from "./components/CenterComponent";
import RightComponent from "./components/RightComponent";

function App() {
  return (
    <div className="font-sans w-full flex min-h-screen bg-[#FAFAFE]">
      <SideBar />
      <CenterComponent />
      <RightComponent />
    </div>
  );
}

export default App;
