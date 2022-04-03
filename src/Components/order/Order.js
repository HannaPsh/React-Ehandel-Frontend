import React from 'react'
import CartItems from '../cart/CartItems';
import { Link } from "react-router-dom";



const Order = ({ cartItems, removeFromCart }) => {
  return (
    <div>
      <h2>Order Details</h2>
      <ul>
        <CartItems cartItems={cartItems} removeFromCart={removeFromCart} />
      </ul>
      {/* <button className="button primary">
        <a href="/login" style={{"color":"white"}}>Checkout</a>
      </button> */}
      <div>
        <Link className="button primary" role="button" to="/login">
          Checkout
        </Link>
      </div>
    </div>
  );
};

export default Order
