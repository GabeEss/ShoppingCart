import React, {useState, useEffect, useContext} from "react";
import "../css/ProductDisplay.css";
import DisplayItem from "./DisplayItem";
import allProducts from "../data/all-products";
import { chairOne } from "../data/chairs";
import { eraserOne } from "../data/erasers";
import { highlighterOne } from "../data/highlighters";
import { notebookOne } from "../data/notebooks";
import pencils from "../data/pencils";
import pens from "../data/pens";
import { SearchContext } from "./SearchContext";

const ProductDisplay = ({selectedProduct}) => {
    const [products, setProducts] = useState([]);
    const [multiples, setMultiples] = useState([]);
    const {search} = useContext(SearchContext);


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
            // Get pencils as an array and then use forEach loop on it.
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

    // Handles a change in the searchbar value. Checks for products that start with the same letters.
    useEffect(() => {
        setProducts([]);
        setMultiples([]);
        Object.values(allProducts).forEach(product => {
            let index = 0;
            if (product.name.toLowerCase().startsWith(search.toLowerCase())) {
                index += 1;
                editDisplayMultiple(product, index)
            }
        })
    }, [search])

    // Handles when the user clicks on all products in the sidebar.
    const editDisplayAll = (products) => {
        setMultiples([]);
        const mappedProducts = products.map((product, index) => {
            return <DisplayItem key={index} product={product} />;
        });

        setProducts(mappedProducts);
    };

    // Handles when the user clicks on an item-type with multiple items in the sidebar.
    const editDisplayMultiple = (product, index) => {
        const mappedProduct = <DisplayItem key={index} product={product} />;
        setMultiples((prevMultiples) => [...prevMultiples, mappedProduct]);
    };

    // Handles when the user clicks on an item-type with one item in the sidebar.
    const editDisplayOneItem = (product) => {
        setMultiples([]);
        const mappedProduct = <DisplayItem product={product} />
        setProducts(mappedProduct);
    };


    return(
        <div className="product-display">
            {/* If multiples is empty, display products, otherwise display multiples. */}
            {!multiples.length ? products : multiples}
        </div>
    )
}

export default ProductDisplay;