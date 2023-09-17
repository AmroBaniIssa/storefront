export const addToCart = (item) => {
    console.log("add to card", item);
  
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
  