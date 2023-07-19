import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  Items: 0,
};

const CartSlice = createSlice({
  name: "CartItems",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.Items = state.Items + 1;
    },
  },
});

export const { addToCart } = CartSlice.actions;

export default CartSlice.reducer;
