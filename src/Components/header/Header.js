import React from 'react'
import { Link } from 'react-router-dom';
import Cart from '../cart/Cart';


const Header = ({cartItems, removeFromCart, createOrder}) => {
  return (
    <div>
      <header>
        <Link to="/">Home Page</Link>
        <Link to="/login">Login</Link>
        <Cart
          cartItems={cartItems}
          removeFromCart={removeFromCart}
          createOrder={createOrder}
              ></Cart>


      </header>
    </div>
  );
}

export default Header;