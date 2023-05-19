
import React from "react";
import { useState } from "react";
import './../styles/App.css';
import Tab from "./Tab";



const App = () => {
  const [currentTab, setCurrentTab] = useState("");


  return (
    <div>
        <Tab setCurrentTab = {setCurrentTab}/>
        <h4>{currentTab}</h4>
    </div>
  )
}

export default App
