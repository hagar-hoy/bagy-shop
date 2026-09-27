import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      const product = action.payload;

      const existingItem = state.cart.find((item) => item.id === product.id);

      if (existingItem) {
        existingItem.quantity++;
        existingItem.totalPrice =
          existingItem.quantity * existingItem.unitPrice;
        return;
      }

      state.cart.push({
        id: product.id,
        title: product.title,
        unitPrice: product.price,
        quantity: 1,
        totalPrice: product.price,
        thumbnail: product.thumbnail,
      });
    },

    deleteItem(state, action) {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
    increaseItem(state, action) {
      const item = state.cart.find((item) => item.id === action.payload);
      item.quantity++;
      item.totalPrice = item.quantity * item.unitPrice;
    },
    decreaseItem(state, action) {
      const item = state.cart.find((item) => item.id === action.payload);
      item.quantity--;
      item.totalPrice = item.quantity * item.unitPrice;
      if (item.quantity === 0) {
        cartSlice.caseReducers.deleteItem(state, action);
      }
    },
    clearCart(state) {
      state.cart = [];
    },
  },
});
export const { addItem, deleteItem, increaseItem, decreaseItem, clearCart } =
  cartSlice.actions;

export const getCart = (state) => state.cart.cart;
export const getTotalItems = (state) =>
  state.cart.cart.reduce((accumulator, item) => {
    return accumulator + item.quantity;
  }, 0);
export const getTotalPrice = (state) =>
  state.cart.cart.reduce((accumulator, item) => {
    return accumulator + item.totalPrice;
  }, 0);
export default cartSlice.reducer;
