import React from "react";

import data from "./data.json";

import store from "./store";
import { Provider } from "react-redux";
import Home from "./Components/home/Home";
import Header from "./Components/header/Header";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Order from "./Components/order/Order";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CookieConsent from "./Components/CookieConsent";
import Logout from "./Components/logout";




class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: data.products,

      cartItems: localStorage.getItem("cartItems")
        ? JSON.parse(localStorage.getItem("cartItems")) //if this exist use this else empty array
        : [],
      size: 0,
      sort: null,
    
    };
  }
 

  removeFromCart = (product) => {
    const cartItems = this.state.cartItems.slice();

    this.setState({
      cartItems: cartItems.filter((x) => x._id !== product._id),
    });

    localStorage.setItem(
      "cartItems",
      JSON.stringify(cartItems.filter((x) => x._id !== product._id))
    );
  };

  addToCart = (product) => {
    const cartItems = this.state.cartItems.slice();

    //Is already in cart
    let alreadyInCart = false;

    //Check if item is alreay in the cart
    cartItems.forEach((item) => {
      if (item._id === product._id) {
        item.count++;
        alreadyInCart = true;
      }
    });

    if (!alreadyInCart) {
      cartItems.push({ ...product, count: 1 });
    }

    this.setState({ cartItems }); // updates the state

    //Update local storage with new cart item list
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  };

  render() {
    return (
      <Router>
        <Provider store={store}>
          <CookieConsent />
           
          <Header
            cartItems={this.state.cartItems}
            removeFromCart={this.removeFromCart}
          />{" "}
          <Routes>
            <Route path="/login" element={<Login />} />{" "}
            <Route path="/logout" element={<Logout  />} />{" "}
            <Route path="/signup" element={<Signup />} />{" "}
            {/* Creating a rounte for order page.
              This s takes two parameter
               1. List of cart items
               2. a function to remove cart items from the list
             */}
            <Route
              path="/order"
              element={
                <Order
                  cartItems={this.state.cartItems}
                  removeFromCart={this.removeFromCart}
                />
              }
            />{" "}
            <Route
              path="/"
              element={
                <Home
                  products={this.state.products}
                  addToCart={this.addToCart}                  
                />
              }
            />
           
          </Routes>{" "}
        </Provider>{" "}
      </Router>
      
    );
  }
}

export default App;
