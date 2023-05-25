import React from 'react';
import '../css/DisplayItem.css';

const DisplayItem = ({product}) => {

    const {name, price, gallery} = product;
    return(
        <div className='item'>
            <img alt="" src={gallery[0]} />
            <h3 className='name'>{name}</h3>
            <div className='price'>{price}</div>
        </div>
    )
}

export default DisplayItem;