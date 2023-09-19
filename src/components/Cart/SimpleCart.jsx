import React from 'react';
import { connect } from 'react-redux';
import { removeFromCart } from "../../store/CartReducer";
import CancelIcon from '@mui/icons-material/Cancel';
import { Paper, Typography, Box } from '@mui/material';
import { useDispatch } from "react-redux";

const SimpleCart = (props) => {
  const dispatch = useDispatch();

    const handleRemoveFromCart = (item) => {
        dispatch(removeFromCart(item));
      };
  if(props.cartReducer.cartItems.length > 0) {
    return (
      <Paper variant="outline" className="cart" margin="20px" sx={{ height: `${props.cartReducer.cartItems.length * 43 + 20}px`}}>
        <h1>items in your cart</h1>
        {props.cartReducer.cartItems.map((product, idx) => {
          return (
            <Box key={idx} mt={2} sx={{display: 'flex', justifyContent: 'flex-start', margin:'20px',marginBottom:'20px'}}>
              <Typography variant="subtitle1" pl={2} pr={2} data-testid={`cart-amount-${product.title}`}>
              </Typography>
              <Typography variant="subtitle1" pl={2} pr={2} sx={{flexGrow: 1 }} data-testid={`cart-product-${product.title}`}>
                {product.title.length < 30 ? product.title : product.title.substring(0, 30) + '...'}
              </Typography>
              <CancelIcon 
                sx={{ color: 'crimson', marginRight: '10px' }} 
                onClick={() => handleRemoveFromCart(product)}
                data-testid={`cart-product-removeBtn-${product.title}`}
              />
            </Box>
          );
        })}
      </Paper>
    );
  } else {
    return null;
  }
}

const mapStateToProps = (state) => ({
  cartReducer: state.cartReducer,
});

const mapDispatchToProps = (dispatch) => ({
  removeFromCart: () => dispatch(removeFromCart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SimpleCart);