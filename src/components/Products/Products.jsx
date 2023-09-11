import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getProducts } from "../../store/ProductsReducer"; // Import your action creator

function ProductList(props) {
//   useEffect(() => {
    // Dispatch the action to fetch products when the component mounts
//     props.dispatch(getProducts());
//   }, [props]);
console.log(props.products.products)
  return (
    <div>
      <h1>Product List</h1>
      
      <ul>
        {props.products.products.map((product) => (
          <li key={product.id}>{product.products.title}</li>
        ))}
      </ul>
      <button onClick={() => props.reset()}>Reset Products</button>
    </div>
  );
}

const mapStateToProps = (state) => ({
  products: state.productsReducer
  
});

const mapDispatchToProps = {
  getProducts,
  reset: () => ({ type: "RESET" }), 
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
