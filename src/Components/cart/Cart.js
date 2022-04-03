import React, { Component } from "react";
import "https://kit.fontawesome.com/a076d05399.js";
import "./cart.css";
import CartItems from "./CartItems";
import CartToggle from "./CartToggle";
import { Link } from "react-router-dom";
export default class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showCart: false,
      };
  }


  toggleCart = () => {   
    this.setState({showCart: !this.state.showCart});
  };

  render() {
    const { cartItems } = this.props;
  

    
    return (
      <>
        <CartToggle cartItems={cartItems} toggleCart={this.toggleCart} />

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
            <div >
              <Link className="cart-proceed-btn" role="button" to="/order">
                Proceed
              </Link>
            </div>
          )}
        </div>
      </>
    );
  }
}
