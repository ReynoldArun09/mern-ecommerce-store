import { Button } from "../ui/button";
import { useAddToCartMutation } from "@/services/cart/cart-mutation";
import LoadingSpinner from "./loading-spinner";

export default function AddToCartButton({ productId }: { productId: string }) {
  const { mutate, isPending } = useAddToCartMutation();

  const handleAddToCart = () => {
    if (!productId) {
      console.warn("Product ID is missing");
      return;
    }

    mutate(productId);
  };
  return (
    <Button className="w-full" onClick={handleAddToCart}>
      {isPending ? <LoadingSpinner /> : "Add to cart"}
    </Button>
  );
}
