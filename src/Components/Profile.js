import React, { useReducer, useState } from 'react';
import formatCurrency from '../util';
import axios from 'axios';

const reducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_REQUEST':
      return { ...state, loading: true };
    case 'UPDATE_SUCCESS':
      return {
        ...state,
        updatedUser: action.payload,
        loading: false,
        success: true,
        error: '',
      };
    case 'UPDATE_FAIL':
      return {
        ...state,
        error: action.payload,
        loading: false,
        success: false,
      };

    default:
      return state;
  }
};

export default function Profile() {
  const [state, dispatch] = useReducer(reducer, {
    loading: false,
    updatedUser: null,
    error: '',
    success: false,
  });

  let userName = JSON.parse(localStorage.getItem('user'));
  const { loading, error, success } = state;
  const [email, setEmail] = useState(userName.email);
  const [name, setName] = useState(userName.name);
  const [password, setPassword] = useState(userName.password);
  const [orders, setOrders] = useState(userName.orders);
  const [showHistory, setShowHistory] = useState(false);
  async function show() {
    try {
      const data = await axios.get(
        `http://127.0.0.1:5000/users/${userName._id}`
      );
      let updatedOrders = data.data.orders;
      setOrders(updatedOrders);
    } catch (err) {
      dispatch({ type: 'LOGIN_FAIL', payload: err.message });
    }

    if (showHistory === false) {
      setShowHistory(true);
    } else {
      setShowHistory(false);
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: 'UPDATE_REQUEST' });
    try {
      const res = await fetch(`http://127.0.0.1:5000/users/${userName._id}`, {
        method: 'PATCH',
        body: JSON.stringify({ ...userName, orders, name, email, password }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });
      const updatedUser = await res.json();
      console.log(userName);
      console.log(updatedUser);

      dispatch({
        type: 'UPDATE_SUCCESS',
        payload: updatedUser,
      });
    } catch (err) {
      dispatch({ type: 'UPDATE_FAIL', payload: err.message });
    }
    /* ######################################################################## */
    try {
      const data = await axios.get(
        `http://127.0.0.1:5000/users/${userName._id}`
      );
      let updatedName = data.data.name;
      setName(updatedName);
    } catch (err) {
      dispatch({ type: 'LOGIN_FAIL', payload: err.message });
    }
  };
  return (
    <div>
      <h1>{name}'s Profile</h1>
      <form onSubmit={handleSubmit} className="form">
        <div className="form-item">
          <label>Name:</label>
          <input
            name="name"
            type="text"
            value={name}
            required
            onChange={(e) => setName(e.target.value)}
          ></input>
        </div>
        <div className="form-item">
          <label>Email:</label>
          <input
            name="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </div>

        <div className="form-item">
          <label>Password:</label>
          <input
            name="password"
            type="password"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </div>
        <div className="form-item">
          <label> </label>
          <button>Update</button>
        </div>
        {loading && (
          <div className="form-item">
            <label> </label>
            <span>Processing...</span>
          </div>
        )}
        {error && (
          <div className="form-item">
            <label> </label>
            <span className="error">{error}</span>
          </div>
        )}
        {success && (
          <div className="form-item">
            <label> </label>
            <span className="success">Profile updated successfully.</span>
          </div>
        )}
        <div className="form-item">
          <label> </label>
          <button type="button" onClick={show}>
            Show Purchase history
          </button>
        </div>
        {showHistory && (
          <div>
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
                        {formatCurrency(o.price)} {''}
                      </div>
                    </section>
                  </div>
                ))}
              </li>
            </ul>
          </div>
        )}
      </form>
    </div>
  );
}
