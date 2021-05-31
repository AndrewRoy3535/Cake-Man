import { cartTypes } from "./cartTypes";

export const addItem = (products) => ({
  type: cartTypes.ADD_ITEMS,
  payload: products,
});
