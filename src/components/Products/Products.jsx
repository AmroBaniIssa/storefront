import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getProducts } from "../../store/ProductsAction";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { selectCategory } from "../../store/CategoriesReducer";
import { addToCart } from "../../store/CartReducer";
import { useDispatch } from "react-redux";

function ProductList(props) {
  const dispatch = useDispatch();

  const handleAddToCart = (item) => {
    // Dispatch the `addToCart` action creator
    dispatch(addToCart(item));
  };
  // const handleAddToCart = (item) => {
  //   addToCart(item);
  // };
console.log("cart state",props.cartReducer)  
  useEffect(() => {
    props.getProducts();
  }, []);

  return (
    <div>
      <h1>Product List</h1>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {props.products.filteredProducts.map((product, idx) => (
          <div key={idx} style={{ margin: "100px" }}>
            <Card sx={{ maxWidth: 500 }}>
              <CardMedia
                sx={{ height: 500, width: 500 }}
                image={product.image}
                title="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {product.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <h4>description:</h4> {product.description}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <h4>price:{product.price} </h4>
                </Typography>
              </CardContent>
              <CardActions>
                <Button onClick={() => handleAddToCart(product)}>
                  Add to Cart
                </Button>
                {/* <Button size="small">Learn More</Button> */}
              </CardActions>
              {/* <li>{product.title}</li>
            <img
              src={product.image}
              alt="Description of the image"
              height={200}
              ></img>
              <button>add to cart</button>
            </div> */}
            </Card>
          </div>
        ))}
      </div>
      <button onClick={props.reset}>Reset Products</button>
    </div>
  );
}

const mapStateToProps = (state) => ({
  products: state.productsReducer,
  categories: state.categoriesReducer,
  cartReducer: state.cartReducer,
});

const mapDispatchToProps = (dispatch) => ({
  getProducts: () => dispatch(getProducts()),
  reset: () => dispatch({ type: "RESET" }),
  selectCategory: selectCategory,
  addToCart: () => dispatch(addToCart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
