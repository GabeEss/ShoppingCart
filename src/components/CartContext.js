import React, { createContext, useState, useEffect } from 'react';
import createShoppingCart from '../logic/cart-factory';

export const CartContext = createContext();

export const CartProvider = ({children}) => {
    let bool = false; // This boolean ensures the cart doesn't overiterate on quantity due to rerenders.

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

      setCart((oldCart) => {
        const combinedCart = createShoppingCart();
        // Add items from the old cart
        oldCart.items.forEach((item) => {
            combinedCart.addItem(item);
          });
        // Update the quantities of existing items and add new items to the cart
        newCart.items.forEach((newItem) => {
          const existingItemIndex = combinedCart.items.findIndex((item) => item.id === newItem.id);
          if (existingItemIndex !== -1) {
            // Increase the quantity of the existing item
            if(bool === false) {
              combinedCart.items[existingItemIndex].quantity += newItem.quantity;
              bool = true;
            }
          } else {
            // Add the new item to the cart
            combinedCart.addItem(newItem);
          }
        });
      return combinedCart;
      });
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