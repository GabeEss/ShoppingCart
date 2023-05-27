import React, {useContext} from "react";
import "../css/ProductDisplay.css";
import { SearchContext } from "./SearchContext";
import DisplayAllProduct from "./DisplayAllProduct";
import DisplayMultipleProduct from "./DisplayMultipleProduct";
import DisplaySingleProduct from "./DisplaySingleProduct";
import DisplaySearchProduct from "./DisplaySearchProduct";

const ProductDisplay = ({selectedProduct}) => {
    const {search} = useContext(SearchContext);
    
    return (
        <div className="product-display">
          {search ? (
            <DisplaySearchProduct/>
          ) : selectedProduct === 'all' ? (
            <DisplayAllProduct />
          ) : selectedProduct === 'pens' || selectedProduct === 'pencils' ? (
            <DisplayMultipleProduct type={selectedProduct} />
          ) : selectedProduct === 'chairs' || selectedProduct === 'erasers' ||
              selectedProduct === 'highlighters' || selectedProduct === 'notebooks' ? (
            <DisplaySingleProduct type={selectedProduct} />
          ) : (
            <DisplayAllProduct />
          )}
        </div>
      );
}

export default ProductDisplay;