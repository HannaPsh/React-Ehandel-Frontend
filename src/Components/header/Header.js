import React from 'react';
import { Link } from 'react-router-dom';
import Cart from '../cart/Cart';

const Header = ({ cartItems, removeFromCart }) => {
  return (
    <div>
      <header>
        <Link to="/" className="ICONIC">
          ICONIC
        </Link>
        <div className="Nav">
          <i className="far fa-user-circle"></i>
          <Link to="/login">Login</Link>
          <Cart
            cartItems={cartItems}
            removeFromCart={removeFromCart}
          ></Cart>{' '}
        </div>
      </header>
    </div>
  );
};

export default Header;
