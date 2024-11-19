import { Button } from "@/components/ui/button";
import { XIcon } from "../icons";
import { useRemoveFromCartMutation } from "@/services/cart/cart-mutation";
import { useVerifyAuthApi } from "@/services/auth/auth-queries";
import { useCart } from "@/hooks/useCart";

export default function RemoveFromCart({ productId }: { productId: string }) {
  const { mutate } = useRemoveFromCartMutation();
  const { data: isAuth } = useVerifyAuthApi();
  const { removeFromLocalStorage } = useCart();
  const handleRemoveFromCart = (productId: string) => {
    if (!isAuth) {
      removeFromLocalStorage(productId);
    } else {
      mutate(productId);
    }
  };
  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => handleRemoveFromCart(productId)}
    >
      <XIcon className="w-4 h-4" />
    </Button>
  );
}
