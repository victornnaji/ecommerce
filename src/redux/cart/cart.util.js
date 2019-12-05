export const addItemsToCart = (cartItems, ItemsToAdd) => {
    const existingItem = cartItems.find(cartItem => cartItem.id === ItemsToAdd.id);

    if(existingItem) {
        return cartItems.map( cartItem => cartItem.id === ItemsToAdd.id ? {...cartItems, quantity: cartItem.quantity + 1}
            : cartItem
      )
    }

    return [...cartItems, {...ItemsToAdd, quantity: 1}]
}