import { cartTypes } from "./cartTypes";
import { addItemsToCart, removeItemFormCart } from "./cartUtils";

const INITIAL_STATE = {
  cartItems: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case cartTypes.ADD_ITEMS:
      return {
        ...state,
        cartItems: addItemsToCart(state.cartItems, action.payload),
      };
    case cartTypes.REMOVE_ITEMS:
      return {
        ...state,
        cartItems: removeItemFormCart(state.cartItems, action.payload),
      };
    default:
      return state;
  }
};

export default cartReducer;
