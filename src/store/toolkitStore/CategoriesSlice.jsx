import { createSlice } from "@reduxjs/toolkit";
const categoriesReducer = createSlice({
  name: "Categories",
  initialState: {  categories: [
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
  selectedCategory: "", },
  reducers: {
        selectCategory(state, action) {
        const selectedCategory = state.categories.find(
            (category) => category.id === action.payload
          );
          console.log("selected category",selectedCategory)
          return {
            ...state,
            selectedCategory:selectedCategory
          };
    },
  },
});


export const { selectCategory } = categoriesReducer.actions;
export default categoriesReducer.reducer;
