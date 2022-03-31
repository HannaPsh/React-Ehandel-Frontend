import { FETCH_PRODUCTS } from '../types';
import { FILTER_PRODUCTS_BY_SIZE } from '../types';
import { ORDER_PRODUCTS_BY_PRICE } from '../types';

export const fetchProducts = () => async(dispatch) => {
    const res = await fetch('http://localhost:5000/products');
    const data = await res.json();
    dispatch({
        type: FETCH_PRODUCTS,
        payload: data,
    });
};

export const filterProducts = (products, size) => (dispatch) => {

    dispatch({
        type: FILTER_PRODUCTS_BY_SIZE,
        payload: {
            size: size,
            items: size === "" ?
                products : products.filter((x) => x.availableSizes.indexOf(size) >= 0),
        },
    });
};

export const sortProducts = (filteredProducts, sort) => (dipatch) => {
    const sortedProducts = filteredProducts.slice();
    if (sort === "") {
        sortProducts.sort((a, b) => (a._id > b._id ? 1 : -1));
    } else {
        sortedProducts.sort((a, b) =>
            sort === "lowest" ?
            a.price > b.price ?
            1 :
            -1 :
            a.price > b.price ?
            -1 :
            1
        );
    }
    dipatch({
        type: ORDER_PRODUCTS_BY_PRICE,
        payload: {
            sort: sort,
            items: sortedProducts,
        },
    });
};