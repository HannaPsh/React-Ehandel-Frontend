import React, {useState } from "react";
import "https://kit.fontawesome.com/a076d05399.js";
import "./cart.css";
import CartItems from "./CartItems";
import CartToggle from "./CartToggle";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Cart = () => {

  const cartItems = useSelector(state => state.cartItems);
 const [showCart, setShowCart] = useState(false)

  const toggleCart = () => {
    setShowCart(!showCart );
  };

  return (
    <>
      <CartToggle toggleCart={toggleCart} />

      <div
        className={
         showCart ? "toggle-cart-show" : "toggle-cart-hide"
        }
      >
        <CartItems />

        {cartItems.length !== 0 && (
          <div>
            <Link className="cart-proceed-btn" role="button" to="/order">
              Proceed
            </Link>
          </div>
        )}
      </div>
    </>
  );
};
export default Cart;
