import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk'; /* to hundle actions that reqwue async and await */
import cartReducer from './reducers/cartReducer';
import { productsReducer } from './reducers/productReducers';

const initialState = {};
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  combineReducers({
    products: productsReducer,
    cartItems: cartReducer
  }),
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);
export default store;
/* we later use the store in App.js */
