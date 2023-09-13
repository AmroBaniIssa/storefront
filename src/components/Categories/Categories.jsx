// import React from "react";
// import { connect } from "react-redux";
// import { selectCategory } from "../../store/CategoriesReducer";
// import Box from "@mui/material/Box";
// import InputLabel from "@mui/material/InputLabel";
// import FormControl from "@mui/material/FormControl";
// import NativeSelect from "@mui/material/NativeSelect";

// function CategoriesList(props) {
//   return (
//     <div>
//       <h1>Product List</h1>
//       <ul>
//         {/* <List
//           sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
//         >
//           {props.categories.categories.map((category) => (
//             <ListItem
//               key={category}
//               disableGutters
//               secondaryAction={
//                 <IconButton aria-label="comment">
//                   <CommentIcon />
//                 </IconButton>
//               }
//             >
//               <ListItemText primary={` ${category.dispalyName}`} />
//             </ListItem>
//           ))}
//         </List> */}
//         <Box sx={{ minWidth: 120 }}>
//           <FormControl fullWidth>
//             <InputLabel variant="standard" htmlFor="uncontrolled-native">
//               Age
//             </InputLabel>
//             <NativeSelect
//               defaultValue={30}
//               inputProps={{
//                   name: "age",
//                   id: "uncontrolled-native",
//                 }}
//                 >
//                     props.categories.categories.map((category) => (

//               <option value={10} props.categories.categories.map((category) => ()>Ten</option>
//               <option value={20}>Twenty</option>
//               <option value={30}>Thirty</option>
//                     )
//             </NativeSelect>
//           </FormControl>
//         </Box>
//       </ul>
//     </div>
//   );
// }

// const mapStateToProps = (state) => ({
//   categories: state.categoriesReducer,
// });

// const mapDispatchToProps = {
//   selectCategory,
// };

// export default connect(mapStateToProps, mapDispatchToProps)(CategoriesList);
