import { CartContextProvider } from "@/context/cart-provider";
import { useContext } from "react";

export const useCart = () => {
  const {
    count,
    totalAmount,
    addToLocalStorage,
    cartItems,
    clearLocalStorage,
    updateInLocalStorage,
    removeFromLocalStorage,
    LocalStorage,
  } = useContext(CartContextProvider);
  return {
    count,
    totalAmount,
    addToLocalStorage,
    cartItems,
    clearLocalStorage,
    updateInLocalStorage,
    removeFromLocalStorage,
    LocalStorage,
  };
};
