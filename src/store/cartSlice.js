import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartProducts: [
    { id: 1, title: "Велосипед", count: 5 },
    { id: 2, title: "Самокат", count: 4 },
    { id: 3, title: "Гантели", count: 7 },
    { id: 4, title: "Ракетки", count: 1 },
  ],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.cartProducts = state.cartProducts.concat({
        id: action.payload.id,
        count: 1,
        title: action.payload.title,
      });
    },

    increment: (state, action) => {
      const product = state.cartProducts.find(
        (product) => product.id === action.payload.id
      );

      if (product) {
        product.count += 1;
      }
    },

    decrement: (state, action) => {
      const productIndex = state.cartProducts.findIndex(
        (product) => product.id === action.payload.id
      );

      if (productIndex !== -1) {
        const product = state.cartProducts[productIndex];
        if (product.count > 1) {
          product.count -= 1;
        } else {
          state.cartProducts.splice(productIndex, 1);
        }
      }
    },
  },
});

export const { addProduct, increment, decrement } = cartSlice.actions;

export default cartSlice.reducer;
