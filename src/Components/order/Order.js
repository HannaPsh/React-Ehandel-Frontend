import React from "react";
import CartItems from "../cart/CartItems";
import { Link } from "react-router-dom";
import "./order.css";

//input parameters
const Order = ({ cartItems, removeFromCart }) => {
  return (
    <div>
      <h2>Order Details</h2>

      <ul className="order-items">
        <CartItems cartItems={cartItems} removeFromCart={removeFromCart} />
        
          <Link className="button primary  btn" role="button" to="/login">
            Checkout
          </Link>
        
      </ul>
      {/* <button className="button primary">
        <a href="/login" style={{"color":"white"}}>Checkout</a>
      </button> */}
    </div>
  );
};

export default Order;
