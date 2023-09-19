import React, { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Products from "./components/Products/Products";
import Cart from "./components/Cart/Cart";
import ProductDetails from "./components/Products/ProductDetails";
export default (props) => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Products />} />
        </Routes>
        <Routes>
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Routes>
          <Route path="/ProductDetails/:ID" element={<ProductDetails />} />
        </Routes>
      </BrowserRouter>

    </>
  );
};
