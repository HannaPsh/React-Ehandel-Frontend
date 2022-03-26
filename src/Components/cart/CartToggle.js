import React from 'react'

const CartToggle = ({cartItems, toggleCart}) => {
  return (
    <div className="cart cart-header">
      {" "}
      <span>
        <i
          className="fa fa-shopping-cart"
          onClick={(e) => toggleCart(e)}
        ></i>{" "}
        {cartItems.length}
      </span>
    </div>
  );
}

export default CartToggle