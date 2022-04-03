import React from 'react';
import { Link } from 'react-router-dom';
import Cart from '../cart/Cart';

const Header = ({ cartItems, removeFromCart, submitted }) => {
  const logoutFunction = () => {
    localStorage.removeItem('user');
  };
  let userName = JSON.parse(localStorage.getItem('user'));

  return (
    <div>
      <header>
        <Link to="/" className="ICONIC">
          ICONIC
        </Link>

        <div className="Nav">
          {localStorage.getItem('submitted') === 'true' && (
            <span className="userName">{userName.name}'s Profile</span>
          )}
          {localStorage.getItem('submitted') === 'true' ? (
            <div>
              <i className="far fa-user-circle"></i>
              <Link to="/logout" onClick={logoutFunction}>
                Logout
              </Link>
            </div>
          ) : (
            <div>
              <i className="far fa-user-circle"></i>
              <Link to="/login">Login</Link>
            </div>
          )}
          <Cart cartItems={cartItems} removeFromCart={removeFromCart}></Cart>{' '}
        </div>
      </header>
    </div>
  );
};

export default Header;
