import { combineReducers, createStore , applyMiddleware} from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import productsReducer from "./ProductsReducer";
import categoriesReducer from "./CategoriesReducer";
import cartReducer from "./CartReducer"
import thunk from "redux-thunk";


let reducers = combineReducers({

productsReducer: productsReducer,
categoriesReducer:categoriesReducer,
cartReducer:cartReducer,
});

const store = () => {
  return createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));
};

export default store();
