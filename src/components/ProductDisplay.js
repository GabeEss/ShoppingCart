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
    const [multiples, setMultiples] = useState([]);

    // Display all products on-load
    useEffect(() => {
        editDisplayAll(allProducts);
      }, []);

    // Display products depending on if one item, multiple items, or all items.
    useEffect(() => {
        if(selectedProduct === 'chairs') 
            editDisplayOneItem(chairOne);
        else if(selectedProduct === 'erasers')
            editDisplayOneItem(eraserOne);
        else if(selectedProduct === 'highlighters')
            editDisplayOneItem(highlighterOne);
        else if(selectedProduct === 'notebooks')
            editDisplayOneItem(notebookOne);
        else if(selectedProduct === 'pencils'){
            setProducts([]);
            setMultiples([]);
            let index = 0;
            // Needed to destructure pencils as an object without naming each object that it destructures.
            Object.values(pencils).forEach(element => {
                index += 1;
                editDisplayMultiple(element, index)
            });
        }
        else if(selectedProduct === 'pens') {
            setProducts([]);
            setMultiples([]);
            let index = 0;
            Object.values(pens).forEach(element => {
                index += 1;
                editDisplayMultiple(element, index)
            });
        }
        else 
            editDisplayAll(allProducts);
    }, [selectedProduct]);

    const editDisplayAll = (products) => {
        setMultiples([]);
        const mappedProducts = products.map((product, index) => {
            return <DisplayItem key={index} product={product} />;
          });

          setProducts(mappedProducts);
      }

      const editDisplayMultiple = (product, index) => {
        const mappedProduct = <DisplayItem key={index} product={product} />;

        // Hold multiple containers within setMultiples.
        setMultiples((prevMultiples) => [...prevMultiples, mappedProduct]);
      };

    const editDisplayOneItem = (product) => {
        setMultiples([]);
        const mappedProduct = <DisplayItem product={product}/>
        setProducts(mappedProduct);
    }

    return(
        <div className="product-display">
            {/* If multiples is empty, display products, otherwise display multiples. */}
            {!multiples.length ? products : multiples}
        </div>
    )
}

export default ProductDisplay;