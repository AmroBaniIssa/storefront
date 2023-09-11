import axios from "axios";

let initialState = {
  products: [],
  filteredProducts: [],
};

function productsReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_PRODUCTS":
        return {
            ...state,
            products: action.payload,
            filteredProducts: action.payload,
        };
        case "SELECTED_CATEGORY":
            if (action.payload.id) {
                let filteredProducts = state.products.filter(
                    (product) => product.categoryId === action.payload.id.toString()
                    );
                    return { ...state, filteredProducts };
                }
                return { ...state, filteredProducts: state.products };
                
                default:
        console.log(state.products);
      return state;
  }
}

export const getProducts = () => async (dispatch) => {
  try {
    const response = await axios.get("https://fakestoreapi.com/products");
    console.log("///////", response);
    dispatch({
      type: "GET_PRODUCTS",
      payload: response.data,
    });
  } catch (err) {
    console.error(err);
  }

  dispatch({
    type: "GET_PRODUCTS",
    payload: res?.data?.results,
  });
};

export default productsReducer;
