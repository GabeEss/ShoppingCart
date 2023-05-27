import React, {useState, useEffect} from "react";
import DisplayItem from "./DisplayItem";
import allProducts from "../data/all-products";

const DisplayAllProduct = () => {
    const [products, setProducts] = useState();

    useEffect(() => {
        editDisplayAll(allProducts);
    }, [])

    // Handles when the user clicks on all products in the sidebar.
    const editDisplayAll = (products) => {
        const mappedProducts = products.map((product, index) => {
            return <DisplayItem key={index} product={product} />;
        });

        setProducts(mappedProducts);
    };

    return(
        <div>{products}</div>
    )
}

export default DisplayAllProduct;