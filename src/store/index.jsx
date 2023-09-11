import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import productsReducer from "./ProductsReducer";
import categoriesReducer from "./CategoriesReducer";

// import myCounterReducer from "./Votes";


let reducers = combineReducers({
//   myCounterReducer: myCounterReducer,

productsReducer: productsReducer,
categoriesReducer:categoriesReducer,
});

const store = () => {
  return createStore(reducers, composeWithDevTools());
};

export default store();
