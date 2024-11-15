/* eslint-disable @typescript-eslint/no-explicit-any */
const useCart = () => {
  const getCartFromLocalStorage = () => {
    const cart = localStorage.getItem("cart");
    return cart ? JSON.parse(cart) : [];
  };

  const addToCartInLocalStorage = (productId: string) => {
    const cart = getCartFromLocalStorage();
    const productIndex = cart.findIndex(
      (item: any) => item.productId === productId
    );
    if (productIndex === -1) {
      cart.push({ productId, quantity: 1 });
    } else {
      cart[productIndex].quantity += 1;
    }

    localStorage.setItem("cart", JSON.stringify(cart));
  };

  return {
    getCartFromLocalStorage,
    addToCartInLocalStorage,
  };
};

export default useCart;
