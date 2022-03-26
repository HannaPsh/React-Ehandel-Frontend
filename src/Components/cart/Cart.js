import React, { Component } from "react";
import formatCurrency from "../../util";
import "https://kit.fontawesome.com/a076d05399.js";
import "./cart.css";
import CartItems from "./CartItems";
import CartToggle from "./CartToggle";
export default class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      address: "",
      showCheckout: false,
      showCart: false,
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
    this.setState({ ...this.state, showCart: !this.state.showCart });
  };

  render() {
    const { cartItems } = this.props;
    return (
      <>
      
        <CartToggle cartItems={cartItems} toggleCart={ this.toggleCart}/>

        <div
          className={
            this.state.showCart ? "toggle-cart-show" : "toggle-cart-hide"
          }
        >
          <CartItems
            cartItems={cartItems}
            removeFromCart={this.props.removeFromCart}
          />

          {cartItems.length !== 0 && (
           
          
              <div className="cart-proceed-btn">
                <button
                  onClick={() => {
                    this.setState({ showCheckout: true });
                  }}
                  className="button primary"
                >
                  Checkout
                </button>
              </div>
            
          )}
        </div>
      </>
    );
  }
}
