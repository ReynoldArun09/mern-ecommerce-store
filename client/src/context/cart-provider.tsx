import { useVerifyAuthApi } from "@/services/auth/auth-queries";
import { useGetCartProductsApi } from "@/services/cart/cart-queries";
import { ProductResponse } from "@/services/types";
import { createContext, useMemo, useState } from "react";

interface CartInitialValueProps {
  count: number;
  totalAmount: number;
  addToLocalStorage: (product: ProductResponse) => void;
  cartItems: CartItem[];
  removeFromLocalStorage: (productId: string) => void;
  updateInLocalStorage: (productId: string, quantity: number) => void;
  clearLocalStorage: () => void;
  LocalStorage: CartItem[] | [];
}

interface CartItem {
  _id: string;
  product: ProductResponse;
  quantity: number;
}

interface CartProviderProps {
  children: React.ReactNode;
}

const initialValue: CartInitialValueProps = {
  count: 0,
  totalAmount: 0,
  addToLocalStorage: () => null,
  cartItems: [],
  removeFromLocalStorage: () => null,
  updateInLocalStorage: () => null,
  clearLocalStorage: () => null,
  LocalStorage: [],
};

export const CartContextProvider =
  createContext<CartInitialValueProps>(initialValue);

export default function CartProvider({ children }: CartProviderProps) {
  const [LocalStorage, setLocalStorage] = useState(() => {
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
  });

  const { data: dbStorage } = useGetCartProductsApi();
  const { data: isAuth } = useVerifyAuthApi();

  const cartItems = isAuth ? dbStorage : LocalStorage;

  const { count, totalAmount } = useMemo(() => {
    if (!cartItems || cartItems.length === 0) {
      return { totalAmount: 0, count: 0 };
    }

    const totalAmount = cartItems?.reduce(
      (total: number, item: CartItem) =>
        total + item.product.price * item.quantity,
      0
    );
    const count = cartItems?.reduce(
      (total: number, item: CartItem) => total + item.quantity,
      0
    );

    return { count, totalAmount };
  }, [cartItems]);

  const addToLocalStorage = (product: ProductResponse) => {
    const currentCart = [...LocalStorage];

    const existingProduct = currentCart.find(
      (item) => item._id === product._id
    );

    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      currentCart.push({
        product,
        _id: product._id,
        quantity: 1,
      });
    }
    setLocalStorage(currentCart);
  };

  const removeFromLocalStorage = (productId: string) => {
    const updateCart = LocalStorage.filter(
      (item: CartItem) => item._id !== productId
    );
    setLocalStorage(updateCart);
  };
  const updateInLocalStorage = (productId: string, quantity: number) => {
    const updateCart = LocalStorage.map((item: CartItem) =>
      item._id === productId ? { ...item, quantity } : item
    );
    setLocalStorage(updateCart);
  };
  const clearLocalStorage = () => {
    setLocalStorage([]);
  };

  return (
    <CartContextProvider.Provider
      value={{
        totalAmount,
        count,
        addToLocalStorage,
        cartItems,
        clearLocalStorage,
        updateInLocalStorage,
        removeFromLocalStorage,
        LocalStorage,
      }}
    >
      {children}
    </CartContextProvider.Provider>
  );
}
