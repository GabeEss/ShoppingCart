import React, { createContext, useState, useEffect } from 'react';
import createShoppingCart from '../logic/cart-factory';

export const CartContext = createContext();

export const CartProvider = ({children}) => {

    const [cart, setCart] = useState(() => {
      // Retrieve the cart from localStorage or create a new one
      const savedCart = localStorage.getItem('cart');
      return savedCart ? JSON.parse(savedCart) : createShoppingCart();
    });

    const setCartInfo = (newCart) => {
      if(newCart === 'reset') {
        // Reset the cart by creating a new empty cart
        setCart(createShoppingCart());
        return;
      }
        setCart(newCart);
    };

    useEffect(() => {
        // Save the cart to localStorage whenever it changes
        localStorage.setItem('cart', JSON.stringify(cart));
      }, [cart]);

    return(
        <CartContext.Provider value={{cart, setCartInfo}}>
            {children}
        </CartContext.Provider>
    )
}