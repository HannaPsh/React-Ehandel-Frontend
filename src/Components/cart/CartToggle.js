import React from "react";

const CartToggle = ({ cartItems, toggleCart }) => {
  return (
    <div className="cart cart-header">
      {" "}
      <span>
        <i className="fa fa-shopping-cart" onClick={(e) => toggleCart(e)}></i>{" "}
      </span>{" "}
      <strong className="cart-total-items">{cartItems.length}</strong>
    </div>
  );
};

export default CartToggle;
