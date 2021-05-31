import { combineReducers } from "redux";
import shopReducer from "./shopReducer/shopReducer";
import cartReducer from "./cartReducer/cartReducer";

const rootReducer = combineReducers({
  shop: shopReducer,
  cart: cartReducer,
});

export default rootReducer;
