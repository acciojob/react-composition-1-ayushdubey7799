
import React from "react";
import { useState } from "react";
import './../styles/App.css';
import Tabs from "./Tabs";



const App = () => {
  const [currentTab, setCurrentTab] = useState("");


  return (
    <div>
        <Tabs setCurrentTab = {setCurrentTab}/>
        <h4>{currentTab}</h4>
    </div>
  )
}

export default App
