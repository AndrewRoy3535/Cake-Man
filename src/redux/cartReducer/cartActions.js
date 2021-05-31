import { cartTypes } from "./cartTypes";

export const addItem = (products) => ({
  type: cartTypes.ADD_ITEMS,
  payload: products,
});

export const removeItem = (porducts) => ({
  type: cartTypes.REMOVE_ITEMS,
  payload: porducts,
});
