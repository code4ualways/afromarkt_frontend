import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./Redux/Slices/Cart";
import ProductsSlice from "./Redux/Slices/Products";
import ProductseverythingleatherSlice from "./Redux/Slices/Categories";
import GetOneProductSlice from "./Redux/Slices/OneProduct";
const store = configureStore({
  reducer: {
    Cart: CartReducer,
    products: ProductsSlice,
    category: ProductseverythingleatherSlice,
    oneProduct: GetOneProductSlice,
  },
});

export default store;
