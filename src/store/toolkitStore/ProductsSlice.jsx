import { createSlice } from "@reduxjs/toolkit";
const productsReducer = createSlice({
  name: "Poducts",
  initialState: { products: [], filteredProducts: [] },
  reducers: {
    add(state, action) {
      console.log(action.payload);
      return {
        ...state,
        products: action.payload,
        filteredProducts: action.payload,
      };
    },
    selectCategory(state, action) {
      if (action.payload === 3) {
        const filteredProducts = state.products.filter(
          (product) => product.category === "jewelery"
        );

        return { ...state, filteredProducts: filteredProducts };
      } else if (action.payload === 2) {
        const filteredProducts = state.products.filter(
          (product) => product.category === "electronics"
        );

        return { ...state, filteredProducts: filteredProducts };
      } else if (action.payload === 4) {
        const filteredProducts = state.products.filter(
          (product) => product.category === "men's clothing"
        );

        return { ...state, filteredProducts: filteredProducts };
      } else if (action.payload === 5) {
        const filteredProducts = state.products.filter(
          (product) => product.category === "women's clothing"
        );

        return { ...state, filteredProducts: filteredProducts };
      } else if (action.payload === 1) {
        return { ...state, filteredProducts: state.products };
      }
    },
  },
});

export const getRemoteData = () => async (dispatch, state) => {
  let myresult = await fetch("https://fakestoreapi.com/products");
  let productData = await myresult.json();
  console.log(productData);
  productData.forEach((item) => dispatch(add(item)));
};
export const { add, selectCategory } = productsReducer.actions;
export default productsReducer.reducer;
