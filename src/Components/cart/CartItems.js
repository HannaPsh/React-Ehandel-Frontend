import React from "react";
import CartItem from "./CartItem";
import "./cart.css";
import formatCurrency from "../../util";

const CartItems = ({ cartItems, removeFromCart }) => {
  return (
    <div className="cart">
      {cartItems.length === 0 ? (
        "Cart is empty"
      ) : (
        <div>
          <ul className="cart-items">
            {cartItems.map((item) => (
              <CartItem item={item} removeFromCart={removeFromCart} />
            ))}
          </ul>
          <div className="total">
            <div>
              Total:{""}
              {formatCurrency(
                cartItems.reduce((a, c) => a + c.price * c.count, 0)
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartItems;
