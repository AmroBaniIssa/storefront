import React from "react";
import { connect } from "react-redux";
import { selectCategory } from "../../store/CategoriesReducer";
// import Box from "@mui/material/Box";
// import InputLabel from "@mui/material/InputLabel";
// import FormControl from "@mui/material/FormControl";
// import NativeSelect from "@mui/material/NativeSelect";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { useEffect, useState } from "react";
import Products from "../Products/Products";

// function TabPanel(props) {
//   const { children, value, index } = props;

//   return (
//       <div>
//           {value === index && (
//               <h1>{children}</h1>
//           )}
//       </div>
//   );
// }

const CategoriesList = (props) => {
  // const dispatchData=useDispatch();

  const selectCategory = props.selectCategory;
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    // dispatchData(getRemoteProduct())
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
              {/* <TabPanel value={value} index={indx}>
                              <h5>{category.description}</h5>
                          </TabPanel> */}
            </div>
          );
        })}
        {/* {
              <div className=' bg-white shadow-md shadow-black flex flex-col h-auto p-4 rounded-md'>
                  <h1 className='font-bold'>{activeCategory?.displayName}</h1>
                  <p>{activeCategory?.description}</p>
              </div>

          } */}
      </div>
      {/* <Products />  */}
    </>
  );
};
// function CategoriesList(props) {
//   return (
//     <div>
//       <h1>  Category </h1>
//         <Box sx={{ minWidth: 120 }}
//          key={1}>
//           <FormControl fullWidth>
//             {/* <InputLabel variant="standard" htmlFor={`category-select-${1}`}>

//             </InputLabel> */}
//             <NativeSelect
//               inputProps={{
//                   name: `category-${1}`,
//                   id: `category-select-${1}`,
//                 }}
//                 // value={category.selectedCategory} // Set the value based on the category
//                 onChange={(event) => props.selectCategory(event.target.value, 1)}

//                 >
//                 {props.categories.categories.map((category) => (
//               <option value={10}>{category.dispalyName}</option>
//             //   <option value={20}>Twenty</option>
//             //   <option value={30}>Thirty</option>
//               ))}
//             </NativeSelect>
//           </FormControl>
//         </Box>
//     </div>
//   );
// }

const mapStateToProps = (state) => ({
  categories: state.categoriesReducer,
});

const mapDispatchToProps = { selectCategory };
// const mapDispatchToProps = (dispatch) => ({
//   selectCategory: (selectedCategory, categoryId) =>
//     dispatch(selectCategory(selectedCategory, categoryId)),
// });

export default connect(mapStateToProps, mapDispatchToProps)(CategoriesList);
