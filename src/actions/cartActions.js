import { ADD_TO_CART, REMOVE_FROM_CART } from "../types";

export const removeFromCart = (item) => {
  return {
    type: REMOVE_FROM_CART,
    payload: item,
  };
};

export const addToCart = (product) => (dispatch) => {
  dispatch({
    type: ADD_TO_CART,
    payload: product,
  });
};


