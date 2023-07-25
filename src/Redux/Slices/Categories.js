import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  products: [],
};

const ProductseverythingleatherSlice = createSlice({
  name: "ProductseverythingleatherSlice",
  initialState,
  reducers: {
    GetAlleverythingleather: (state, action) => {
      state.products = action.payload;
    },
  },
});

export const { GetAlleverythingleather } =
  ProductseverythingleatherSlice.actions;

export default ProductseverythingleatherSlice.reducer;
