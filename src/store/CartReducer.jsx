const initialState = {
  cartItems: [],
  cartItemsCount: 0,
  totalPrice: 0,
};
export default function cartReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case "ADD-TO-CART":
      state.cartItems.push({ ...payload, quantity: 1 });
      payload.inventory -=1;
      return {
        ...state,
        cartItemsCount: state.cartItemsCount + 1,
        totalPrice: (state.totalPrice += payload.price),
      };

    case "REMOVE-FROM-CART":
   
      let deletedItem = state.cartItems.filter(
        (item, indx) => item.id !== payload.id
      );
      let total = state.cartItemsCount - payload.quantity;

      return {
        cartItems: deletedItem,
        cartItemsCount: total,
        totalPrice: (state.totalPrice -= payload.price),
      };
    
    
    case "CLEAR_CART":
      return {
        ...state,
        cartItems: [],
        cartItemsCount: 0,
        totalPrice: 0,
      };
    default:
      return state;
  }
}
export const addToCart = (item) => {
  return {
    type: "ADD-TO-CART",
    payload: item,
  };
};
export const removeFromCart = (item) => {
  return {
    type: "REMOVE-FROM-CART",
    payload: item,
  };
};


export const clearCart = () => {
  return {
    type: "CLEAR_CART",
  };
};
