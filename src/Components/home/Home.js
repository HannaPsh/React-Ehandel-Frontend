import React from 'react';
import Filter from '../Filter';
import Products from '../Products';

const Home = ({
  products,

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
            <Filter
              count={products.length}
              size={size}
              sort={sort}
              filterProducts={filterProducts}
              sortProducts={sortProducts}
            />

            <Products products={products} />
          </div>
          <div className="sidebar"></div>
        </div>
      </main>
      <footer>
        <p className="col-sm">
          &copy;{new Date().getFullYear()} ICONIC | All rights reserved |Privacy
        </p>
      </footer>
    </div>
  );
};

export default Home;
