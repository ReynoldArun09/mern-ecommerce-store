import { ProductResponse } from "@/services/types";
import useLocalStorage from "./useLocalStorage";

interface CartItem {
  productId: string;
  product: ProductResponse;
  quantity: number;
}

export default function useCart() {
  const [cart, setCart] = useLocalStorage<CartItem[]>("cart", []);
  const addToLocalStorage = (product: ProductResponse) => {
    const currentCart = [...cart];

    const existingProduct = currentCart.find(
      (item) => item.productId === product._id
    );

    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      currentCart.push({
        product,
        productId: product._id,
        quantity: 1,
      });
    }
    setCart(currentCart);
  };
  const removeFromLocalStorage = (productId: string) => {
    const updateCart = cart.filter((item) => item.productId !== productId);
    setCart(updateCart);
  };
  const updateInLocalStorage = (productId: string, quantity: number) => {
    const updateCart = cart.map((item) =>
      item.productId === productId ? { ...item, quantity } : item
    );
    setCart(updateCart);
  };
  const clearLocalStorage = () => {
    setCart([]);
  };

  return {
    cart,
    addToLocalStorage,
    removeFromLocalStorage,
    updateInLocalStorage,
    clearLocalStorage,
  };
}
