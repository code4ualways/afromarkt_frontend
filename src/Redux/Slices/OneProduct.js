import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  oneProduct: [],
};

const GetOneProductSlice = createSlice({
  name: "OneProduct",
  initialState,
  reducers: {
    GetOneProduct: (state, action) => {
      state.oneProduct = action.payload;
    },
  },
});

export const { GetOneProduct } = GetOneProductSlice.actions;

export default GetOneProductSlice.reducer;
