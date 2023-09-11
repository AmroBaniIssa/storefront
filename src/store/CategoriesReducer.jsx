const initialState = {
  categories: [
    {
      id: 1,
      dispalyName: "electronics",
      normalizedName: "",
      description: "This category contains the electronics",
    },
    {
      id: 2,
      dispalyName: "jewelery",
      normalizedName: "",
      description: "This category contains the jewelery",
    },
    {
      id: 3,
      dispalyName: "men's clothing",
      normalizedName: "",
      description: "This category contains men clothing",
    },
    {
      id: 3,
      dispalyName: "women's clothing",
      normalizedName: "",
      description: "This category contains women clothing",
    },
  ],
  selectedCategory: "",
};
function categoriesReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case "SELECTED_CATEGORY":
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
      let selectedCategory = null;
      for (const category of state.categories) {
        if (category.id === payload) {
          selectedCategory = { ...category };
          break; // Exit the loop once a match is found
        }
      }
      return {
        ...state,
        selectedCategory: selectedCategory,
      };

    case "RESET":
      return initialState;
    default:
      return state;
  }
}

export function selectCategory(name) {
  return {
    type: "SELECTED_CATEGORY",
    payload: name,
  };
}
export const reset = () => {
  return {
    type: "RESET",
  };
};

export default categoriesReducer;
