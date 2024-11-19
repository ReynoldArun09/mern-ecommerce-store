import { Button } from "../ui/button";
import { useAddToCartMutation } from "@/services/cart/cart-mutation";
import LoadingSpinner from "./loading-spinner";
import { useVerifyAuthApi } from "@/services/auth/auth-queries";
import { toast } from "sonner";
import { ProductResponse } from "@/services/types";
import { useCart } from "@/hooks/useCart";

interface AddToCartButtonProps {
  productId: string;
  product: ProductResponse;
  quantity: number;
}

export default function AddToCartButton({
  productId,
  product,
}: AddToCartButtonProps) {
  const { mutate, isPending } = useAddToCartMutation();
  const { data: isAuth } = useVerifyAuthApi();
  const { addToLocalStorage } = useCart();

  const handleAddToCart = () => {
    if (!isAuth) {
      addToLocalStorage(product);
    } else {
      if (!productId) {
        toast.error("Product is not available");
        return;
      }
      mutate(productId);
    }
    toast.success("Product added to cart");
  };
  return (
    <Button className="w-full" onClick={handleAddToCart}>
      {isPending ? <LoadingSpinner /> : "Add to cart"}
    </Button>
  );
}
