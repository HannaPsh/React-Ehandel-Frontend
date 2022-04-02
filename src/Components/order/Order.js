import React from 'react'
import CartItems from '../cart/CartItems';


const Order = ({ cartItems, removeFromCart }) => {
  return (
    <div>
      <h2>Order Details</h2>
      <ul>
        {cartItems.map((item) => (
          <CartItems cartItems={cartItems} removeFromCart={removeFromCart} />
        ))}
      </ul>
      <button className="button primary">
        <a href="/login" style={{"color":"white"}}>Checkout</a>
      </button>
    </div>
  );
};

export default Order
