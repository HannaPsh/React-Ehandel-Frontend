import React, { Component } from "react";
import formatCurrency from "../../util";
import CartItem from "./CartItem";
import "https://kit.fontawesome.com/a076d05399.js";
import "./cart.css"
export default class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      address: "",
      showCheckout: false,
      showCart: false
    };

  }
  handleInput = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  createOrder = (e) => {
    e.preventDefault();
    const order = {
      name: this.state.name,
      email: this.state.email,
      address: this.state.address,
      cartItems: this.props.cartItems,
    };
    
    this.props.createOrder(order);
  };

  toggleCart = (e) => {
    e.preventDefault();
    this.setState({ ...this.state, showCart: !this.state.showCart })
  }


  render() {
    const { cartItems } = this.props;
    return (
      <div>
        <div className="cart cart-header">
          {" "}
          <span>
            <i className="fa fa-shopping-cart" onClick={(e) => this.toggleCart(e)}></i> {cartItems.length}
          </span>
        </div>
        <div
          className={
            this.state.showCart ? "toggle-cart-show" : "toggle-cart-hide"
          }
        >
          <div className="cart">
            <ul className="cart-items">
              {cartItems.map((item) => (
                <li key={item._id}>
                  <CartItem
                    item={item}
                    removeFromCart={this.props.removeFromCart}
                  />
                </li>
              ))}
            </ul>
          </div>
          {cartItems.length !== 0 && (
            <div className="cart">
              <div className="total">
                <div>
                  Total:{""}
                  {formatCurrency(
                    cartItems.reduce((a, c) => a + c.price * c.count, 0)
                  )}
                </div>
                <button
                  onClick={() => {
                    this.setState({ showCheckout: true });
                  }}
                  className="button primary"
                >
                  Proceed
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}
