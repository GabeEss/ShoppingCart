import React, { useState, useContext } from 'react';
import { CartContext } from './CartContext';
import createShoppingCart from '../logic/cart-factory';
import createShoppingItem from '../logic/cart-item-factory';

const CartItem = ({item}) => {
    const {name, price, quantity} = item;
    const {cart, setCartInfo} = useContext(CartContext);    

    const handleAddToCart = () => {
        let newCart = createShoppingCart();
        let newItem = createShoppingItem({
            name: item.name,
            price: item.price,
            type: item.type,
            gallery: item.gallery,
            id: item.id,
            quantity: 1,
          });
        newCart.addItem(newItem);
        setCartInfo(newCart);
      };
    
      const handleSubtract = () => {
        
      };

    return(
        <div className='cart-item'>
            <div className='name-quantity'>
                <h3 className='name'>{name}</h3>
                <div>{quantity}</div>
            </div>
            <div className='price'>{price}</div>
            <div className='quantity-panel'>
                <button id='increment' onClick={handleAddToCart}>+</button>
                <button id='decrement' onClick={handleSubtract}>-</button>
            </div>
        </div>
    )
}

export default CartItem;