const initialState = {
  categories: [
    {
      id: 1,
      displayName: "all",
      normalizedName: "all",
      description: "all categories",
    },
    {
      id: 2,
      displayName: "electronics",
      normalizedName: "electronics",
      description: "This category contains electronics",
    },
    {
      id: 3,
      displayName: "jewelry",
      normalizedName: "jewelry",
      description: "This category contains jewelry",
    },
    {
      id: 4,
      displayName: "men's clothing",
      normalizedName: "mens-clothing",
      description: "This category contains men's clothing",
    },
    {
      id: 5,
      displayName: "women's clothing",
      normalizedName: "womens-clothing",
      description: "This category contains women's clothing",
    },
  ],
  selectedCategory: "", 
};
function categoriesReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case "SELECTED_CATEGORY":
      const selectedCategory = state.categories.find(
        (category) => category.id === payload
      );
      console.log("selected category",selectedCategory)
      return {
        ...state,
        selectedCategory:selectedCategory
      };
      // let selectedCategory = state.categories + 1;
      // let selectedCategory = state.categories.map((category) => {
      //     if (category.id === payload) {
      //         return {
      //             ...state,
      //     selectedCategory :selectedCategory
      //         }
      //     }
      //     else {
      //         return candidate;
      //     }
      // });
      // let selectedCategory = null;
      // for (const category of state.categories) {
      //   if (category.id === payload) {
      //     selectedCategory = { ...category };
      //     break; // Exit the loop once a match is found
      //   }
      // }
      // return {
      //   ...state,
      //   selectedCategory: selectedCategory,
      // };

    case "RESET":
      return initialState;
    default:
      return state;
  }
}

export function selectCategory(id) {
  return {
    type: "SELECTED_CATEGORY",
    payload: id,
  };
}
export const reset = () => {
  return {
    type: "RESET",
  };
};

export default categoriesReducer;
