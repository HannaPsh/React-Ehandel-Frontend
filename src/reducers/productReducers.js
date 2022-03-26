import { FETCH_PRODUCTS } from '../types';

export const productsReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return {
        items: action.payload,
      };
    default:
      return state;
  }
}; /* with thiese lines of code we update the data inside redux store */
