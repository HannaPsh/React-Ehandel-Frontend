import React, { useState, useEffect } from 'react';
import CartItems from '../cart/CartItems';
import { Link } from 'react-router-dom';
import './order.css';

const Order = ({ cartItems, removeFromCart }) => {
  let userName = JSON.parse(localStorage.getItem('user'));
  let cart = JSON.parse(localStorage.getItem('cartItems'));
  /* ##################################################### */

  useEffect(() => {
    // Update the document title using the browser API
    if (userName) {
      let updated = userName.orders.concat(cart);
      setOrders(updated);
      setName(userName.name);
      setEmail(userName.email);
      setPassword(userName.password);
    }
  });
  /* push doesn't work for some reason, concat puts the object into the array in API SEPARATELY */
  /* ########################################################## */

  const [success, setSuccess] = useState(false);
  const [fail, setFail] = useState(false);
  const [orders, setOrders] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const orderIsPaid = async () => {
    if (userName) {
      try {
        const res = await fetch(`http://127.0.0.1:5000/users/${userName._id}`, {
          method: 'PATCH',
          body: JSON.stringify({ ...userName, name, orders, email, password }),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        });
        const updatedUser = await res.json();
        /* 
        setOrders(userName.orders.concat(cart));
        setName(userName.name);
        setEmail(userName.email);
        setPassword(userName.password); */
      } catch (err) {
        console.log(err);
      }
      localStorage.removeItem('cartItems'); /* clears the cart */
      setSuccess(true);
    } else {
      setFail(true);
    }
  };
  return (
    <div>
      <h2>Order Details</h2>

      <ul className="order-items">
        <CartItems cartItems={cartItems} removeFromCart={removeFromCart} />
      </ul>
      {fail && (
        <div className="fail">
          <strong>
            You need to <Link to="/login">login</Link> or{' '}
            <Link to="/signup">signup</Link> to proceed
          </strong>
        </div>
      )}
      <div>
        <button className="button primary" onClick={orderIsPaid}>
          Pay now
        </button>
      </div>
      {success && (window.location.href = '/payment')}
    </div>
  );
};

export default Order;
