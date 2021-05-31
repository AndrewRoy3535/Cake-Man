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
