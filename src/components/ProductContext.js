import React, { createContext, useState, useEffect } from 'react';

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [product, setProduct] = useState(() => {
    // Retrieve the product from localStorage or create a new one
    const savedProduct = localStorage.getItem('product');
    return savedProduct ? JSON.parse(savedProduct) : null;
  });


  // This is to prevent the product information from being lost on a page refresh.
  useEffect(() => {
    // Save the product to localStorage whenever it changes
    localStorage.setItem('product', JSON.stringify(product));
  }, [product]);

  const setProductInfo = (productData) => {
    setProduct(productData);
  };

  return (
    <ProductContext.Provider value={{ product, setProductInfo }}>
      {children}
    </ProductContext.Provider>
  );
};