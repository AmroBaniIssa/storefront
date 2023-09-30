import React, { useState } from "react";
import { connect } from "react-redux";
import { getProducts } from "../../store/ProductsAction";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { selectCategory } from "../../store/CategoriesReducer";
import { removeFromCart } from "../../store/CartReducer";
import { useDispatch } from "react-redux";
import Header from "../Header/Header";
import "./cart.css";
function Cart(props) {
  const [showMessage, setShowMessage] = useState(false);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (item) => {
    dispatch(removeFromCart(item));
  };
  const handleSubmit = () => {
    // event.preventDefault();
    setShowMessage(true);

    // alert("thank you for buying from us");
  };
  return (
    <div>
      <Header />

      <h1>your cart List</h1>
      <h1> number of items {props.cartReducer.cartItemsCount}</h1>
      <h1> Total Price {Math.floor(props.cartReducer.totalPrice)}</h1>
      {!showMessage ? (
        <div className="checkout">
          <div className="credit-card-box">
            <div className="flip">
              <div className="front">
                <div className="chip" />
                <div className="logo">
                  <svg
                    version="1.1"
                    id="visa"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    width="47.834px"
                    height="47.834px"
                    viewBox="0 0 47.834 47.834"
                    style={{ "enable-background": "new 0 0 47.834 47.834" }}
                  >
                    <g>
                      <g>
                        <path
                          d="M44.688,16.814h-3.004c-0.933,0-1.627,0.254-2.037,1.184l-5.773,13.074h4.083c0,0,0.666-1.758,0.817-2.143
                   c0.447,0,4.414,0.006,4.979,0.006c0.116,0.498,0.474,2.137,0.474,2.137h3.607L44.688,16.814z M39.893,26.01
                   c0.32-0.819,1.549-3.987,1.549-3.987c-0.021,0.039,0.317-0.825,0.518-1.362l0.262,1.23c0,0,0.745,3.406,0.901,4.119H39.893z
                   M34.146,26.404c-0.028,2.963-2.684,4.875-6.771,4.875c-1.743-0.018-3.422-0.361-4.332-0.76l0.547-3.193l0.501,0.228
                   c1.277,0.532,2.104,0.747,3.661,0.747c1.117,0,2.313-0.438,2.325-1.393c0.007-0.625-0.501-1.07-2.016-1.77
                   c-1.476-0.683-3.43-1.827-3.405-3.876c0.021-2.773,2.729-4.708,6.571-4.708c1.506,0,2.713,0.31,3.483,0.599l-0.526,3.092
                   l-0.351-0.165c-0.716-0.288-1.638-0.566-2.91-0.546c-1.522,0-2.228,0.634-2.228,1.227c-0.008,0.668,0.824,1.108,2.184,1.77
                   C33.126,23.546,34.163,24.783,34.146,26.404z M0,16.962l0.05-0.286h6.028c0.813,0.031,1.468,0.29,1.694,1.159l1.311,6.304
                   C7.795,20.842,4.691,18.099,0,16.962z M17.581,16.812l-6.123,14.239l-4.114,0.007L3.862,19.161
                   c2.503,1.602,4.635,4.144,5.386,5.914l0.406,1.469l3.808-9.729L17.581,16.812L17.581,16.812z M19.153,16.8h3.89L20.61,31.066
                   h-3.888L19.153,16.8z"
                        />
                      </g>
                    </g>
                  </svg>
                </div>
                <div className="number" />
                <div className="card-holder">
                  <label>Card holder</label>
                  <div />
                </div>
                <div className="card-expiration-date">
                  <label>Expires</label>
                  <div />
                </div>
              </div>
              <div className="back">
                <div className="strip" />
                {/* <div className="logo">
                  <svg
                    version="1.1"
                    id="visa"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    width="47.834px"
                    height="47.834px"
                    viewBox="0 0 47.834 47.834"
                    style={{ enableBackground: "new 0 0 47.834 47.834" }}
                  >
                    <g>
                      <g>
                        <path
                          d="M44.688,16.814h-3.004c-0.933,0-1.627,0.254-2.037,1.184l-5.773,13.074h4.083c0,0,0.666-1.758,0.817-2.143
                   c0.447,0,4.414,0.006,4.979,0.006c0.116,0.498,0.474,2.137,0.474,2.137h3.607L44.688,16.814z M39.893,26.01
                   c0.32-0.819,1.549-3.987,1.549-3.987c-0.021,0.039,0.317-0.825,0.518-1.362l0.262,1.23c0,0,0.745,3.406,0.901,4.119H39.893z
                   M34.146,26.404c-0.028,2.963-2.684,4.875-6.771,4.875c-1.743-0.018-3.422-0.361-4.332-0.76l0.547-3.193l0.501,0.228
                   c1.277,0.532,2.104,0.747,3.661,0.747c1.117,0,2.313-0.438,2.325-1.393c0.007-0.625-0.501-1.07-2.016-1.77
                   c-1.476-0.683-3.43-1.827-3.405-3.876c0.021-2.773,2.729-4.708,6.571-4.708c1.506,0,2.713,0.31,3.483,0.599l-0.526,3.092
                   l-0.351-0.165c-0.716-0.288-1.638-0.566-2.91-0.546c-1.522,0-2.228,0.634-2.228,1.227c-0.008,0.668,0.824,1.108,2.184,1.77
                   C33.126,23.546,34.163,24.783,34.146,26.404z M0,16.962l0.05-0.286h6.028c0.813,0.031,1.468,0.29,1.694,1.159l1.311,6.304
                   C7.795,20.842,4.691,18.099,0,16.962z M17.581,16.812l-6.123,14.239l-4.114,0.007L3.862,19.161
                   c2.503,1.602,4.635,4.144,5.386,5.914l0.406,1.469l3.808-9.729L17.581,16.812L17.581,16.812z M19.153,16.8h3.89L20.61,31.066
                   h-3.888L19.153,16.8z"
                        />
                      </g>
                    </g>
                  </svg>
                </div> */}
                <div className="ccv">
                  <label>CCV</label>
                  <div />
                </div>
              </div>
            </div>
          </div>
          <div className="form" autoComplete="off" noValidate>
            <fieldset>
              <label htmlFor="card-number">Card Number</label>
              <input
                type="num"
                id="card-number"
                className="input-cart-number"
                maxLength={4}
              />
              <input
                type="num"
                id="card-number-1"
                className="input-cart-number"
                maxLength={4}
              />
              <input
                type="num"
                id="card-number-2"
                className="input-cart-number"
                maxLength={4}
              />
              <input
                type="num"
                id="card-number-3"
                className="input-cart-number"
                maxLength={4}
              />
            </fieldset>
            <fieldset>
              <label htmlFor="card-holder">Card holder</label>
              <input type="text" id="card-holder" />
            </fieldset>
            <fieldset className="fieldset-expiration">
              <label htmlFor="card-expiration-month">Expiration date</label>
              <div className="select">
                <select id="card-expiration-month">
                  <option />
                  <option>01</option>
                  <option>02</option>
                  <option>03</option>
                  <option>04</option>
                  <option>05</option>
                  <option>06</option>
                  <option>07</option>
                  <option>08</option>
                  <option>09</option>
                  <option>10</option>
                  <option>11</option>
                  <option>12</option>
                </select>
              </div>
              <div className="select">
                <select id="card-expiration-year">
                  <option />
                  <option>2016</option>
                  <option>2017</option>
                  <option>2018</option>
                  <option>2019</option>
                  <option>2020</option>
                  <option>2021</option>
                  <option>2022</option>
                  <option>2023</option>
                  <option>2024</option>
                  <option>2025</option>
                </select>
              </div>
            </fieldset>
            <fieldset className="fieldset-ccv">
              <label htmlFor="card-ccv">CCV</label>
              <input type="text" id="card-ccv" maxLength={3} />
            </fieldset>
            <button className="btn" onClick={() => handleSubmit()}>
              <i className="fa fa-lock" /> submit
            </button>
            {/* {showMessage && <h1>Thanks for submitting the form!</h1>} */}
          </div>
        </div>
      ) : (
        <div>
          <h1>Thank you for buying from us </h1>
          
        </div>
        
      )}
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {props.cartReducer.cartItems.map((product, idx) => (
          <div key={idx} style={{ margin: "100px" }}>
            <Card sx={{
                maxWidth: 500,
                // height:800,
                boxShadow: "0px 4px 6px rgba(0, 0, 0, 1)", 
                border:"solid 5px #FF3C5A",
                borderRadius: "8px",
                backgroundColor:"#0C7592"
              }}>
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
                <Button onClick={() => handleRemoveFromCart(product)}  sx={{
                boxShadow: "0px 4px 6px rgba(0, 0, 0, 1)", 
                border:"solid 1px #FF3C5A",
                borderRadius: "8px",
                backgroundColor:"white"
              }}>
                  Remove From Cart
                </Button>
              </CardActions>
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
  removeFromCart: () => dispatch(removeFromCart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
