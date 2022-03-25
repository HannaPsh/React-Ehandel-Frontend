import React from 'react';
import Products from './Components/Products';

import store from './store';
import { Provider } from 'react-redux';

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <Provider store={store}>
        <div className="grid-container">
          <header>
            <a href="/">Home Page</a>
          </header>
          <main>
            <div className="content">
              <div className="main">
                <Products products={this.state.products} />
              </div>
              <div className="sidebar"></div>
            </div>
          </main>
          <footer>All rights reserved</footer>
        </div>
      </Provider>
    );
  }
}

export default App;
