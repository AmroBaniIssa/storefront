import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import Card from "@mui/material/Card";
import { useDispatch } from "react-redux";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { addToCart } from "../../store/CartReducer";

function ProductDetails(props) {
  const dispatch = useDispatch();

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
  };
  const { ID } = useParams();
  console.log(props);
  console.log(ID);
  const productId = parseInt(ID);
  const product = props.products.filteredProducts.find(
    (p) => p.id === productId
  );
 
  console.log(product);


  useEffect(() => {
  
  }, [ID]);

  return (
    <div>
      <Header />
      <h1>Product Details</h1>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {product ? (
          <div key={product.id} style={{ margin: "100px" }}>
            <Card sx={{ maxWidth: 500 }}>
              <CardMedia
                sx={{ height: 500, width: 500 }}
                image={product.image}
                title="Product Image"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {product.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <h4>Description:</h4> {product.description}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <h4>Price: {product.price}</h4>
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <h4>Inventory: {product.inventory} items available</h4>
                </Typography>
              </CardContent>

              <CardActions>
              <Button onClick={() => handleAddToCart(product)}>
                  Add to Cart
                </Button>
              </CardActions>
            </Card>
          </div>
        ) : (
          <p>Product not found</p>
        )}
      </div>
      <Footer />
    </div>
  );
}

const mapStateToProps = (state) => ({
  products: state.productsReducer,
  cartReducer: state.cartReducer,
});

const mapDispatchToProps = (dispatch) => ({
    addToCart: () => dispatch(addToCart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);
