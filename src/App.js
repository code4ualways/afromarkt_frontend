import React, { useState } from "react";
import "./index.css";
import Main from "./pages/index";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import Category from "./pages/Category";
import store from "./store.js";
import { Provider } from "react-redux";
const Index = () => {
  const [cart, setCart] = useState(0);
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main setCart={setCart} cart={cart} />} />
          <Route
            path="/category"
            element={<Category setCart={setCart} cart={cart} />}
          />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};
export default Index;
