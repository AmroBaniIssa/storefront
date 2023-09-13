import React from "react";
import { connect } from "react-redux";
import { selectCategory } from "../../store/CategoriesReducer";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";

function CategoriesList(props) {
  return (
    <div>
      <h1>  Category </h1>
        <Box sx={{ minWidth: 120 }}
         key={1}>
          <FormControl fullWidth>
            {/* <InputLabel variant="standard" htmlFor={`category-select-${1}`}>
            
            </InputLabel> */}
            <NativeSelect
              inputProps={{
                  name: `category-${1}`,
                  id: `category-select-${1}`,
                }}
                // value={category.selectedCategory} // Set the value based on the category
                onChange={(event) => props.selectCategory(event.target.value, 1)}
                
                >
                {props.categories.categories.map((category) => (
              <option value={10}>{category.dispalyName}</option>
            //   <option value={20}>Twenty</option>
            //   <option value={30}>Thirty</option>
              ))}
            </NativeSelect>
          </FormControl>
        </Box>
    </div>
  );
}

const mapStateToProps = (state) => ({
  categories: state.categoriesReducer,
});

const mapDispatchToProps = {
  selectCategory,
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoriesList);
