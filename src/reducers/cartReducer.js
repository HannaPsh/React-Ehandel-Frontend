import { ADD_TO_CART, REMOVE_FROM_CART } from "../types";

const cartReducer = (
  state = localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [],
  action
) => {
  switch (action.type) {
    case REMOVE_FROM_CART:
      return removeItem(action.payload, state);
    case ADD_TO_CART:
      return addItem(action.payload, state);
    default:
      return state;
  }
};

const addItem = (product, state) => {
  const cartItems = state.slice();

  //Is already in cart
  let alreadyInCart = false;

  //Check if item is alreay in the cart
  cartItems.forEach((item) => {
    if (item._id === product._id) {
      item.count++;
      alreadyInCart = true;
    }
  });

  if (!alreadyInCart) {
    cartItems.push({ ...product, count: 1 });
  }

  state = cartItems;

  //Update local storage with new cart item list
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
  return state;
};

const removeItem = (product, state) => {
  const cartItems = state.slice();
  state = cartItems.filter((x) => x._id !== product._id);
  localStorage.setItem(
    "cartItems",
    JSON.stringify(cartItems.filter((x) => x._id !== product._id))
  );
  return state;
};

export default cartReducer;
