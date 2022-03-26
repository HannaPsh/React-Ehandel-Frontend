import React from "react";
import formatCurrency from "../../util";
import "./cart.css";


const CartItem = ({ item, removeFromCart }) => {
   
  return (
  
    <li key={item._id} id={ item._id}>
      <div>
       
        <img src={item.image} alt={item.title} />
      </div>
      <div>
        <div style={{ wordBreak: "break-word", width: "150px" }}>
          {item.title}
        </div>
      </div>
      <div>
        {formatCurrency(item.price)} x {item.count} {""}
        <i
          className="fa fa-trash"
          aria-hidden="true"
          onClick={() => {
            removeFromCart(item);
          }}
        ></i>
      </div>
    </li>
  );
};

export default CartItem;
