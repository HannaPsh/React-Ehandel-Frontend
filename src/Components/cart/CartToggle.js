import React from "react";
import { useSelector } from "react-redux";


const CartToggle = ({ toggleCart }) => {
  const cartItems = useSelector((state) => state.cartItems);
  return (
    <div className="cart cart-header">
      {" "}
      <span>
        <i className="fa fa-shopping-cart" onClick={() => toggleCart()}></i>{" "}
      </span>{" "}
      <strong className="cart-total-items">{cartItems?.length}</strong>
    </div>
  );
};

export default CartToggle;
