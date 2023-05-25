import React from "react";
import "../css/MainDisplay.css";
import Sidebar from "./Sidebar";
import ProductDisplay from "./ProductDisplay";

const MainDisplay = () => {
    return(
        <div className="main-display">
            <Sidebar/>
            <ProductDisplay/>
        </div>
    )
}

export default MainDisplay;