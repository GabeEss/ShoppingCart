import React from "react";
import "./css/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ProductProvider } from './components/ProductContext';
import { CartProvider } from "./components/CartContext";
import ShopPage from "./pages/ShopPage";
import HomePage from "./pages/HomePage";
import ItemPage from "./pages/ItemPage";

const App = () => {
  return (
    <BrowserRouter>
      <ProductProvider>
        <CartProvider>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/Shop" element={<ShopPage/>} />
            <Route path="/Items/:id" element={<ItemPage />} />
          </Routes>
          </CartProvider>
        </ProductProvider>
    </BrowserRouter>
  );
};

export default App;