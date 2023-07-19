import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./Redux/Slices/Cart";
import ProductsSlice from "./Redux/Slices/Products";
const store = configureStore({
  reducer: {
    Cart: CartReducer,
    products: ProductsSlice,
  },
});

export default store;
