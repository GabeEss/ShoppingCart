import React, { useState, useEffect } from "react";
import "../css/MainDisplay.css";
import Sidebar from "./Sidebar";
import ProductDisplay from "./ProductDisplay";

const MainDisplay = () => {
  const [selectedProductType, setSelectedProduct] = useState(null);

  const handleProductSelection = (type) => {
    setSelectedProduct(type);
  };

  return (
    <div className="main-display">
        <Sidebar onSelectProduct={handleProductSelection} />
        <ProductDisplay selectedProduct={selectedProductType} />
    </div>
  );
};

export default MainDisplay;
