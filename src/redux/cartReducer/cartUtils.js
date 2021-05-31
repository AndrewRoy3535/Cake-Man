export const addItemsToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((el) =>
      el.id === cartItemToAdd.id ? { ...el, quantity: el.quantity + 1 } : el
    );
  }

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

export const removeItemFormCart = (cartItems, itemToremove) => {
  const existingItems = cartItems.find((el) => el.id === itemToremove.id);

  if (existingItems.quantity === 1) {
    return cartItems.filter((el) => el.id !== itemToremove.id);
  }

  return cartItems.map((cartItem) =>
    cartItem.id === itemToremove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};
