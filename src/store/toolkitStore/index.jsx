import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import productsReducer from "./ProductsSlice";
import categoriesReducer from "./CategoriesSlice";
import cartReducer from "./CartSlice"

const reducer = combineReducers({
    productsReducer: productsReducer,
    categoriesReducer:categoriesReducer,
    cartReducer:cartReducer,
})
const store = configureStore({ reducer })
export default store;