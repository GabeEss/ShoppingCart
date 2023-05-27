import React from "react";
import "./css/App.css";
import { HashRouter, BrowserRouter, Routes, Route } from "react-router-dom";
import { ProductProvider } from './components/ProductContext';
import { CartProvider } from "./components/CartContext";
import { SearchProvider } from "./components/SearchContext";
import ShopPage from "./pages/ShopPage";
import HomePage from "./pages/HomePage";
import ItemPage from "./pages/ItemPage";

const App = () => {
  return (
    <HashRouter>
      <ProductProvider>
        <SearchProvider>
          <CartProvider>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/Shop" element={<ShopPage/>} />
              <Route path="/Items/:id" element={<ItemPage />} />
            </Routes>
            </CartProvider>
          </SearchProvider>
        </ProductProvider>
    </HashRouter>
  );
};

export default App;