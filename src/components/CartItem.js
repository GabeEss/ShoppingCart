import React, { useState } from 'react';

const CartItem = (product) => {
    const {name, price} = product;

    const [quantity, setQuantity] = useState(0);

    return(
        <div className='cart-item'>
            <h2 className='name'>{name}</h2>
            <div className='price'>{price}</div>
            <div className='quantity-panel'>
                <button id='increment'></button>
                <button id='decrement'></button>
            </div>
        </div>
    )
}

export default CartItem;