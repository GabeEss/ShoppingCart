import React, {useState, useEffect, useContext} from "react";
import DisplayItem from "./DisplayItem";
import allProducts from "../data/all-products";
import { SearchContext } from "./SearchContext";

const DisplaySearchProduct = () => {
    const {search} = useContext(SearchContext);
    const [searchDisplay, setSearchDisplay] = useState([]);

    // Handles a change in the searchbar value. Checks for products that start with the same letters.
    useEffect(() => {
        setSearchDisplay([]);
        Object.values(allProducts).forEach(product => {
            let index = 0;
            if (product.name.toLowerCase().startsWith(search.toLowerCase())) {
                index += 1;
                editSearchedDisplay(product, index);
            }
        })
    }, [search])

    const editSearchedDisplay = (product, index) => {
        const mappedProduct = <DisplayItem key={index} product={product} />;
        setSearchDisplay((prevMultiples) => [...prevMultiples, mappedProduct]);
    }

    return(
        <div>{searchDisplay}</div>
    )
}

export default DisplaySearchProduct;