import superagent from "superagent";
const api = "https://fakestoreapi.com/products";
const getAction = (payload) => {
  return {
    type: "GET_PRODUCTS",
    payload: payload,
  };
};

export const getProducts = () => (dispatch) => {
  let list = superagent.get(api).then((data) => {
    dispatch(getAction(data.body));
  });
  // console.log(list);
  return list;
};
