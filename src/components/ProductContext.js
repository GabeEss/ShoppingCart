import React, { createContext, useState } from 'react';

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [product, setProduct] = useState(null);

  const setProductInfo = (productData) => {
    setProduct(productData);
  };

  return (
    <ProductContext.Provider value={{ product, setProductInfo }}>
      {children}
    </ProductContext.Provider>
  );
};