import React from 'react';
import Filter from '../Filter';
import Products from '../Products';

const Home = ({
  products,
  addToCart,
  size,
  sort,
  filterProducts,
  sortProducts,
}) => {
  return (
    <div className="grid-container">
      <main>
        <div className="content">
          <div className="main">
            {/* 
                 <Login 
          Login={this.state.login}
          ></Login>
<hr />
          <Signup
          Signup={this.state.signup}
                ></Signup>  */}

            <Filter
              count={products.length}
              size={size}
              sort={sort}
              filterProducts={filterProducts}
              sortProducts={sortProducts}
            />

            <Products products={products} addToCart={addToCart} />
          </div>
          <div className="sidebar"></div>
        </div>
      </main>
      <footer><p className='col-sm'>
            &copy;{new Date().getFullYear()} ICONIC | All rights reserved |Privacy
        </p></footer>
    </div>
  );
};

export default Home;
