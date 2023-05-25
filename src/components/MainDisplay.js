import React, {useState} from "react";
import "../css/MainDisplay.css";
import Sidebar from "./Sidebar";
import ProductDisplay from "./ProductDisplay";
import allProducts from "../data/all-products";

const MainDisplay = () => {
     const [selectedProductType, setSelectedProduct] = useState(allProducts);

    const handleProductSelection = (type) => {
        setSelectedProduct(type);
  };

    return(
        <div className="main-display">
            <Sidebar onSelectProduct={handleProductSelection} />
            <ProductDisplay selectedProduct={selectedProductType} />
        </div>
    )
}

export default MainDisplay;