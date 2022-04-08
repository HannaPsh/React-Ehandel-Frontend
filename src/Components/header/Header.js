import React from 'react';
import { Link } from 'react-router-dom';
import Cart from '../cart/Cart';

const Header = ({ submitted }) => {
  const logoutFunction = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('cartItems');
  };
  //let userName = JSON.parse(localStorage.getItem('user'));
  let userName = 'test'

  return (
    <div>
      <header>
        <Link to="/" className="ICONIC">
          ICONIC
        </Link>

        <div className="Nav">
          {localStorage.getItem('submitted') === 'true' && (
            <span className="userName">
              {' '}
              <Link to="/profile">{userName.name}'s Profile</Link>
            </span>
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
          <Cart />{' '}
        </div>
      </header>
    </div>
  );
};

export default Header;
