import React from "react";
import formatCurrency from "../../util";
import "./cart.css";


const CartItem = ({ item, removeFromCart }) => {
  return (
    <>
      <div>
        <img src={item.image} alt={item.title} />
      </div>
      <div>
        <div>{item.title}</div>
        <div >
          {formatCurrency(item.price)} x {item.count} {""}
          <button
            className="button"
            onClick={() => {
              removeFromCart(item);
            }}
          >
            Remove
          </button>
        </div>
      </div>
    </>
  );
};

export default CartItem;
