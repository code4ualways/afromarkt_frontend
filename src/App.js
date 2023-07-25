import React, { useState } from "react";
import "./index.css";
import Main from "./pages/index";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import Category from "./pages/Category";
import Product from "./pages/Product";

import Checkout from "./pages/Checkout";
import { QueryClient, QueryClientProvider } from "react-query";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import store from "./store.js";
import { Provider } from "react-redux";
import Cart from "./pages/Cart";
const queryClient = new QueryClient({});

const Index = () => {
  const [cart, setCart] = useState(0);
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main setCart={setCart} cart={cart} />} />
            <Route
              path="/category"
              element={<Category setCart={setCart} cart={cart} />}
            />
            <Route
              path="/product/:id"
              element={<Product setCart={setCart} cart={cart} />}
            />
            <Route
              path="/cart"
              element={<Cart setCart={setCart} cart={cart} />}
            />
            <Route
              path="/checkout"
              element={<Checkout setCart={setCart} cart={cart} />}
            />
          </Routes>
        </BrowserRouter>
      </Provider>
      <ToastContainer />
    </QueryClientProvider>
  );
};
export default Index;
