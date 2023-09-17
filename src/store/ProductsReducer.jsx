// import superagent from "superagent";
// const api = "https://fakestoreapi.com/products";

let initialState = {
  products: [
    {
      id: 5,
      title:
        "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
      price: 695,
      description:
        "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
      category: "jewelery",
      image: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
      rating: {
        rate: 4.6,
        count: 400,
      },
    },
    {
      id: 2,
      title: "Mens Casual Premium Slim Fit T-Shirts ",
      price: 22.3,
      description:
        "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
      category: "men's clothing",
      image:
        "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
      rating: {
        rate: 4.1,
        count: 259,
      },
    },
    {
      id: 9,
      title: "WD 2TB Elements Portable External Hard Drive - USB 3.0 ",
      price: 64,
      description:
        "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system",
      category: "electronics",
      image: "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
      rating: {
        rate: 3.3,
        count: 203,
      },
    },
  ],
  filteredProducts: [],
};

function productsReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_PRODUCTS":
      console.log(action.payload);
      return {
        ...state,
        products: action.payload,
        filteredProducts: action.payload,
      };
    case "SELECTED_CATEGORY":
      if (action.payload === 3) {
        const filteredProducts = state.products.filter(
          (product) => product.category === "jewelery"
        );
        // console.log("filterd jewelry", filteredProducts);

        return { ...state, filteredProducts: filteredProducts };
      } else if (action.payload === 2) {
        const filteredProducts = state.products.filter(
          (product) => product.category === "electronics"
        );
        // console.log("filterd electronics", state.filteredProducts);

        return { ...state, filteredProducts: filteredProducts };
      } else if (action.payload === 4) {
        const filteredProducts = state.products.filter(
          (product) => product.category === "men's clothing"
        );
        // console.log("filterd men's clothing", state.filteredProducts);

        return { ...state, filteredProducts: filteredProducts };
      } else if (action.payload === 5) {
        const filteredProducts = state.products.filter(
          (product) => product.category === "women's clothing"
        );
        // console.log("filterd women's clothing", state.filteredProducts);

        return { ...state, filteredProducts: filteredProducts };
      } else if (action.payload === 1) {
        // Reset to include all products when payload is not 2
        return { ...state, filteredProducts: state.products };
      }
    default:
      // console.log("filteredProducts", state.filteredProducts);
      return state;
  }
}

export default productsReducer;
