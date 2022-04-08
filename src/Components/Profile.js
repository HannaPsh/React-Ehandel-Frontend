import React, { useReducer, useState } from 'react';
import formatCurrency from '../util';
import axios from 'axios';

export default function Profile() {
  let userName = JSON.parse(localStorage.getItem('user'));
  const [email, setEmail] = useState(userName.email);
  const [name, setName] = useState(userName.name);
  const [password, setPassword] = useState(userName.password);
  const [orders, setOrders] = useState();
  const [showHistory, setShowHistory] = useState(false);
  async function show() {
    try {
      const data = await axios.get(
        `http://127.0.0.1:5000/users/${userName._id}`
      );
      let updatedOrders = data.data.orders;
      setOrders(updatedOrders);
    } catch (err) {}

    if (showHistory === false) {
      setShowHistory(true);
    } else {
      setShowHistory(false);
    }
  }

  return (
    <div>
      <h1>{userName.name}'s Profile</h1>
      <span>
        <strong>Name:</strong>
        {name}
      </span>
      <br />
      <span>
        <strong>Email:</strong>
        {email}
      </span>
      <br />
      <span>
        <strong>Password:</strong>
        {password}
      </span>
      <br />
      <div>
        {showHistory ? (
          <button type="button" onClick={show}>
            Hide Purchase history
          </button>
        ) : (
          <button type="button" onClick={show}>
            Show Purchase history
          </button>
        )}
        {showHistory && (
          <div className="history">
            <ul>
              <li>
                {' '}
                {orders.map((o) => (
                  <div className="toggle">
                    <section key={o._id} id={o._id}>
                      <div>
                        <img src={o.image} alt={o.title} />
                      </div>
                      <div>
                        <div className="cart-item-title">{o.title}</div>
                      </div>
                      <div>
                        {o.price} kr {''}
                      </div>
                    </section>
                  </div>
                ))}
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
