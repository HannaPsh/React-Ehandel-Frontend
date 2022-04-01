import React from "react";
import Products from "./Components/Products";
import data from "./data.json";
import Cart from "./Components/cart/Cart";
import store from "./store";
import { Provider } from "react-redux";
import Home from "./Components/home/Home";
import Header from "./Components/header/Header";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Order from "./Components/order/Order";

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

    this.setState({ cartItems });

    //Update local storage with new cart item list
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  };

  render() {
    return (
      <Router>
        <Provider store={store}>
          <Header
            cartItems={this.state.cartItems}
            removeFromCart={this.removeFromCart}
            createOrder={this.createOrder}
          />{" "}
          <Routes>
            <Route path="/login" element={<Login />} />{" "}
            <Route path="/signup" element={<Signup />} />{" "}
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
                  size={this.state.size}
                  sort={this.state.sort}
                  filterProducts={this.filterProducts}
                  sortProducts={this.sortProducts}
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
