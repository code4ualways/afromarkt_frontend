import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  products: [],
};

const ProductsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    GetAllProducts: async (state, action) => {
      try {
        const res = await axios.get(
          "https://code123.pythonanywhere.com/api/products/"
        );
        console.log(res, "ressss");
      } catch (error) {}
      state.products = action.payload;
    },
  },
});

export const { GetAllProducts } = ProductsSlice.actions;

export default ProductsSlice.reducer;
