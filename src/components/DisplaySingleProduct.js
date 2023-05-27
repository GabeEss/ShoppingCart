import React, {useState, useEffect} from "react";
import DisplayItem from "./DisplayItem";
import { chairOne } from "../data/chairs";
import { eraserOne } from "../data/erasers";
import { highlighterOne } from "../data/highlighters";
import { notebookOne } from "../data/notebooks";

const DisplaySingleProduct = ({type}) => {
    const [product, setProduct] = useState();
    
    useEffect(() => {
        if(type === 'chairs') 
            editDisplayOneItem(chairOne);
        else if(type === 'erasers')
            editDisplayOneItem(eraserOne);
        else if(type === 'highlighters')
            editDisplayOneItem(highlighterOne);
        else if(type === 'notebooks')
            editDisplayOneItem(notebookOne);
    }, [])

    useEffect(() => {
        if(type === 'chairs') 
            editDisplayOneItem(chairOne);
        else if(type === 'erasers')
            editDisplayOneItem(eraserOne);
        else if(type === 'highlighters')
            editDisplayOneItem(highlighterOne);
        else if(type === 'notebooks')
            editDisplayOneItem(notebookOne);
    }, [type])

    // Handles when the user clicks on an item-type with one item in the sidebar.
    const editDisplayOneItem = (product) => {
        const mappedProduct = <DisplayItem product={product} />
        setProduct(mappedProduct);
    };

    return(
        <div>{product}</div>
    )
}

export default DisplaySingleProduct;