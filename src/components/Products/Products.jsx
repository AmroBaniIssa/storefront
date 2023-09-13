import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getProducts } from "../../store/ProductsReducer"; 

function ProductList(props) {
  // useEffect(() => {
  //   // Dispatch the action to fetch products when the component mounts
  //   props?.getProducts();
  // }, []); 

  return (
    <div>
      <h1>Product List</h1>
      
      <ul>
        {props.products.products.map((product) => (
          <div key={product.id}>
            <li>{product.title}</li>
            <img src={product.image} alt="Description of the image" height={200}></img>
            <button>add to cart</button>
          </div>
        ))}
      </ul>
      <button onClick={props.reset}>Reset Products</button>
    </div>
  );
}

const mapStateToProps = (state) => ({
  products: state.productsReducer,
});

const mapDispatchToProps = {
  getProducts,
  reset: () => ({ type: "RESET" }), 
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
