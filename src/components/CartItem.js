import React, { useState, useContext } from 'react';
import { CartContext } from './CartContext';
import createShoppingCart from '../logic/cart-factory';
import createShoppingItem from '../logic/cart-item-factory';

const CartItem = ({item}) => {
    const {name, price, quantity} = item;
    const {cart, setCartInfo} = useContext(CartContext);    

    const handleAddToCart = () => {
        const updatedCart = createShoppingCart();
      
        cart.items.forEach((cartItem) => {
          // Find the item to add by matching the ID
          if (cartItem.id === item.id) {
              const addedItem = createShoppingItem({
                name: cartItem.name,
                price: cartItem.price,
                type: cartItem.type,
                gallery: cartItem.gallery,
                id: cartItem.id,
                quantity: cartItem.quantity + 1,
              });
              updatedCart.addItem(addedItem);
          } else {
            // Add the other items as they are
            updatedCart.addItem(cartItem);
          }
        });
        setCartInfo(updatedCart);
    }
      const handleSubtract = () => {
        const updatedCart = createShoppingCart();
      
        cart.items.forEach((cartItem) => {
          // Find the item to subtract by matching the ID
          if (cartItem.id === item.id) {
            // If the quantity is greater than 1, decrease it by 1
            if (cartItem.quantity > 1) {
              const subtractedItem = createShoppingItem({
                name: cartItem.name,
                price: cartItem.price,
                type: cartItem.type,
                gallery: cartItem.gallery,
                id: cartItem.id,
                quantity: cartItem.quantity - 1,
              });
              updatedCart.addItem(subtractedItem);
            }
            // If the quantity is 1, skip adding the item to remove it
          } else {
            // Add the other items as they are
            updatedCart.addItem(cartItem);
          }
        });
      
        // Update the cart with the modified item quantities
        setCartInfo(updatedCart);
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