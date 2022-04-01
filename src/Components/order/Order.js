import React from 'react'
import CartItem from '../cart/CartItem';
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
    </div>
  );
};

export default Order
