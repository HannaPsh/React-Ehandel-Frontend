import React from 'react';
import { Link } from 'react-router-dom';
import Cart from '../cart/Cart';

const Header = ({ cartItems, removeFromCart, createOrder }) => {
  return (
    <div>
      <header>
        <Link to="/" className="ICONIC">
          ICONIC
        </Link>
        <div className="Nav">
          <Link to="/login">Login</Link> 
          <Cart
            cartItems={cartItems}
            removeFromCart={removeFromCart}
            createOrder={createOrder}
          ></Cart>{' '}
        </div>
      </header>
    </div>
  );
};

export default Header;
