import React from "react";
import "../css/ShopPage.css";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import ProductDisplay from "../components/ProductDisplay";

const ShopPage = () => {
    return(
        <div className="shop">
            <div>
                <Header/>
            </div>
            <div className="products">
                <Sidebar/>
                <ProductDisplay/>
            </div>
        </div>
    )
}

export default ShopPage;