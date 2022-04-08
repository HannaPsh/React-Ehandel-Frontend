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
        ? JSON.parse(localStorage.getItem("cartItems"))
        : [],
      size: 0,
      sort: null,
    
    };
  }
 

  

  

  render() {
    return (
      <Router>
        <Provider store={store}>
          <CookieConsent />
           
          <Header />{" "}
          
          <Routes>
            <Route path="/login" element={<Login />} />{" "}
            <Route path="/logout" element={<Logout  />} />{" "}
            <Route path="/signup" element={<Signup />} />{" "}
            <Route path="/order"element={<Order/>}/>{" "}
            <Route
              path="/"
              element={
                <Home
                  products={this.state.products}
                                   
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
