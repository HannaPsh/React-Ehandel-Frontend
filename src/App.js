import React from 'react';
import Products from './Components/Products';
import data from './data.json';
import Filter from './Components/Filter';
import Cart from './Components/cart/Cart';
import Login from './Components/Login';
import Signup from './Components/Signup';

/* ########## redux ###############*/
import store from './store';
import { Provider } from 'react-redux';
/* ###################################### */

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products:
        data.products /* this line will not longer be needed when redux will be applied for all components, but the declaration of the state should be kept (empty)*/,
      cartItems: localStorage.getItem('cartItems')
        ? JSON.parse(localStorage.getItem('cartItems'))
        : [],
    };
  }
  createOrder = (order) => {
    alert('Need to save for order' + order.name);
  };
  removeFromCart = (product) => {
    const cartItems = this.state.cartItems.slice();
    this.setState({
      cartItems: cartItems.filter((x) => x._id !== product._id),
    });
    localStorage.setItem(
      'cartItems',
      JSON.stringify(cartItems.filter((x) => x._id !== product._id))
    );
  };
  addToCart = (product) => {
    const cartItems = this.state.cartItems.slice();
    let alreadyInCart = false;
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
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  };

  render() {
    return (
      <Provider store={store}>
        <div className="grid-container">
          <header>
            <a href="/">Home Page</a>

            <Cart
              cartItems={this.state.cartItems}
              removeFromCart={this.removeFromCart}
              createOrder={this.createOrder}
            ></Cart>
          </header>
          <main>
            <div className="content">
              <div className="main">
                {/* <Login 
          Login={this.state.login}
          ></Login>
<hr />
          <Signup
          Signup={this.state.signup}
          ></Signup> */}
                <Filter
                  count={this.state.products.length}
                  size={this.state.size}
                  sort={this.state.sort}
                  filterProducts={this.filterProducts}
                  sortProducts={this.sortProducts}
                />
                <Products
                  products={this.state.products}
                  addToCart={this.addToCart}
                />
              </div>
              <div className="sidebar"></div>
            </div>
          </main>
          <footer>All rights reserved</footer>
        </div>
      </Provider> /* redux component */
    );
  }
}

export default App;
