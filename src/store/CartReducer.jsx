const initialState = {
  cartItems: [],
  cartItemsCount: 0,
  totalPrice: 0,
};
export default function cartReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case "ADDD-TO-CART":
      // console.log("action", payload);
      if (payload.inventory>=1) {
        state.cartItems.push(payload);
        payload.inventory -= 1;
        state.cartItemsCount += 1
      }
      return {
        ...state,
        totalPrice: (state.totalPrice += payload.price),
      };
    case "REMOVE-FROM-CART":
      // let deletedItem = state.cartItems.filter(
      //   (item, indx) => item.id !== payload.id
      // );
      // let total = state.cartItemsCount - 1;
      // payload.inventory += 1;

      // return {
      //   cartItems: deletedItem,
      //   cartItemsCount: total,
      //   totalPrice: (state.totalPrice -= payload.price),
      // };
      if (payload.inventory >= 1) {
        const itemIndex = state.cartItems.findIndex((item) => item.id === payload.id);
        if (itemIndex !== -1) {
          const updatedCartItems = [...state.cartItems];
          updatedCartItems.splice(itemIndex, 1);
          payload.inventory += 1;
          console.log(state.cartItems);
          return {
            ...state,
            cartItems: updatedCartItems,
            cartItemsCount: state.cartItemsCount - 1,
            totalPrice: state.totalPrice - payload.price,
          };
        }
      }
      return {
        ...state,
      };

    case "CLEAR_CART":
      return {
        ...state,
        cartItems: [],
        cartItemsCount: 0,
        totalPrice: 0,
      };
    default:
      // console.log("cart items", state.cartItems);

      return state;
  }
}

export const addToCart = (item) => {
  // console.log("add to card", item);

  return {
    type: "ADDD-TO-CART",
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
