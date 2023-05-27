import React, {useState, useEffect} from "react";
import DisplayItem from "./DisplayItem";
import pencils from "../data/pencils";
import pens from "../data/pens";

const DisplayMultipleProduct = ({type}) => {
    const [multiple, setMultiple] = useState();

    useEffect(() => {
        setMultiple("");
        if(type === 'pens') {
            let index = 0;
            Object.values(pens).forEach(element => {
                index += 1;
                editDisplayMultiple(element, index)
            });
        }
        else if(type === 'pencils') {
            let index = 0;
            // Get pencils as an array and then use forEach loop on it.
            Object.values(pencils).forEach(element => {
                index += 1;
                editDisplayMultiple(element, index)
            });
        }
    }, [])

    useEffect(() => {
        setMultiple("");
        if(type === 'pens') {
            let index = 0;
            Object.values(pens).forEach(element => {
                index += 1;
                editDisplayMultiple(element, index)
            });
        }
        else if(type === 'pencils') {
            let index = 0;
            // Get pencils as an array and then use forEach loop on it.
            Object.values(pencils).forEach(element => {
                index += 1;
                editDisplayMultiple(element, index)
            });
        }
    }, [type])

    // Handles when the user clicks on an item-type with multiple items in the sidebar.
    const editDisplayMultiple = (product, index) => {
        const mappedProduct = <DisplayItem key={index} product={product} />;
        setMultiple((prevMultiples) => [...prevMultiples, mappedProduct]);
    };

    return(
        <div>{multiple}</div>
    )
}

export default DisplayMultipleProduct;