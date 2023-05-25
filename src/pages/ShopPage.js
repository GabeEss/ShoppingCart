import React from "react";
import "../css/ShopPage.css";
import Header from "../components/Header";
import MainDisplay from "../components/MainDisplay";

const ShopPage = () => {
    return(
        <div className="shop">
            <div>
                <Header/>
            </div>
            <div className="products">
                <MainDisplay/>
            </div>
        </div>
    )
}

export default ShopPage;