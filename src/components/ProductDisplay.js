import React, {useState, useEffect} from "react";
import "../css/ProductDisplay.css";
import DisplayItem from "./DisplayItem";
import allProducts from "../data/all-products";
import { chairOne } from "../data/chairs";
import { eraserOne } from "../data/erasers";
import { highlighterOne } from "../data/highlighters";
import { notebookOne } from "../data/notebooks";
import pencils from "../data/pencils";
import pens from "../data/pens";

const ProductDisplay = ({selectedProduct}) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        editDisplay(allProducts);
      }, []);

    useEffect(() => {
        if(selectedProduct === 'chairs') 
            displayOneProduct(chairOne);
        else if(selectedProduct === 'erasers')
            displayOneProduct(eraserOne);
        else if(selectedProduct === 'highlighters')
            displayOneProduct(highlighterOne);
        else if(selectedProduct === 'notebooks')
            displayOneProduct(notebookOne);
        else if(selectedProduct === 'pencils'){
            console.log(pencils);
            pencils.forEach(element => {
                console.log(element);
            });
            // editDisplay(pencils);
        }
        else if(selectedProduct === 'pens')
            editDisplay(pens);
        else 
            editDisplay(allProducts);
    }, [selectedProduct]);

    const editDisplay = (products) => {
        const mappedProducts = products.map((product, index) => {
            return <DisplayItem key={index} product={product} />;
          });

          setProducts(mappedProducts);
      };

    const displayOneProduct = (product) => {
        const mappedProduct = <DisplayItem product={product}/>
        setProducts(mappedProduct);
    }

    return(
        <div className="product-display">
            {products}
        </div>
    )
}

export default ProductDisplay;