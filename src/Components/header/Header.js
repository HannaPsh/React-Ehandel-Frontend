import React from 'react';
import { Link } from 'react-router-dom';
import Cart from '../cart/Cart';



const Header = ({ cartItems, removeFromCart, submitted}) => {


  return (
    <div>
      <header>
        <Link to="/" className="ICONIC">
          ICONIC
        </Link>
        <div className="Nav">
        <i class='far fa-user-circle'></i>
 
        {localStorage.getItem("submitted")==='true' ? (<Link to="/logout">Logout</Link>):( <Link to="/login">Login</Link> )}
        
         
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
