import { createSlice } from "@reduxjs/toolkit";

const CartReducer = createSlice({
  name: "Cart",
  initialState: { cartItems: [], cartItemsCount: 0, totalPrice: 0 },
  reducers: {
    addToCart(state, action) {
      if (action.payload.inventory >= 1) {
        state.cartItems.push(action.payload);
        action.payload.inventory -= 1;
        state.cartItemsCount += 1;
      }
      return {
        ...state,
        totalPrice: (state.totalPrice += action.payload.price),
      };
    },
    removeFromCart(state, action) {
      let deletedItem = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      );
      let total = state.cartItemsCount - 1;
      action.payload.inventory += 1;

      return {
        cartItems: deletedItem,
        cartItemsCount: total,
        totalPrice: (state.totalPrice -= action.payload.price),
      };
    },
    clearCart(state) {
      return {
        ...state,
        cartItems: [],
        cartItemsCount: 0,
        totalPrice: 0,
      };
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = CartReducer.actions;
export default CartReducer.reducer;
