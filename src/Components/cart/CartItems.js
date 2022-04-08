import React from "react";
import CartItem from "./CartItem";
import "./cart.css";
import { useSelector } from "react-redux";

const CartItems = () => {

  const cartItems = useSelector((state) => state.cartItems);
 
  return (
    <div className="cart">
      {cartItems.length === 0 ? (
        "Cart is empty"
      ) : (
        <div>
          <ul className="cart-items">
            {cartItems.map((item) => (
              <CartItem
                item={item}
                key={item._id}
              />
            ))}
          </ul>

          <div className="total">
            <div>
              <label>Total : SEK </label>
              {cartItems.reduce((a, c) => a + c.price * c.count, 0)}
              
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartItems;
