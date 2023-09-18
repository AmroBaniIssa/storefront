import superagent from "superagent";
const api = "https://fakestoreapi.com/products";
const getAction = (payload) => {
 
  const newItems = payload.map((item) => ({
    ...item, 
    inventory: 10, 
  }));
  console.log("new items",newItems)
  return {
    type: "GET_PRODUCTS",
    payload: newItems,
  };
};

export const getProducts = () => (dispatch) => {
  let list = superagent.get(api).then((data) => {
    dispatch(getAction(data.body));
  });
  // console.log(list);
  return list;
};
