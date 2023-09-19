import React from "react";
import { connect } from "react-redux";
import { selectCategory } from "../../store/CategoriesReducer";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { useEffect, useState } from "react";
import Products from "../Products/Products";



const CategoriesList = (props) => {

  const selectCategory = props.selectCategory;
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    selectCategory(value + 1);
  }, [value, selectCategory]);

  return (
    <>
      <div>
        <h1> Categories</h1>

        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="all categories" />
            <Tab label="electronics" />
            <Tab label="jewelery" />
            <Tab label="men's clothing" />
            <Tab label="women's clothing" />
          </Tabs>
        </Box>
        {props.categories.categories.map((category, indx) => {
          return (
            <div class="center">
              <h4 text-align="center">{category.dispalyName}</h4>
            
            </div>
          );
        })}
       
      </div>
    </>
  );
};


const mapStateToProps = (state) => ({
  categories: state.categoriesReducer,
});

const mapDispatchToProps = { selectCategory };


export default connect(mapStateToProps, mapDispatchToProps)(CategoriesList);
