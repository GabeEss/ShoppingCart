import React, {useState, useEffect} from "react";
import "../css/ProductDisplay.css";
import DisplayItem from "./DisplayItem";
import allProducts from "../data/all-products";

const ProductDisplay = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        editDisplay();
      }, []);

    const editDisplay = () => {
        const mappedProducts = allProducts.map((product, index) => {
            return <DisplayItem key={index} product={product} />;
          });

          setProducts(mappedProducts);
      };

    return(
        <div className="product-display">
            {products}
        </div>
    )
}

export default ProductDisplay;