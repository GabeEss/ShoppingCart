import React, { useState, useContext } from "react";
import "../css/MainDisplay.css";
import Sidebar from "./Sidebar";
import ProductDisplay from "./ProductDisplay";
import { SearchContext } from "./SearchContext";

const MainDisplay = () => {
  const [selectedProductType, setSelectedProduct] = useState(null);
  const {setSearchTerm} = useContext(SearchContext);

  const handleProductSelection = (type) => {
    setSearchTerm("");
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
