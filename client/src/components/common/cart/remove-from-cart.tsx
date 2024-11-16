import { Button } from "@/components/ui/button";
import { XIcon } from "../icons";
import { useRemoveFromCartMutation } from "@/services/cart/cart-mutation";

export default function RemoveFromCart({ productId }: { productId: string }) {
  const { mutate } = useRemoveFromCartMutation();
  const handleRemoveFromCart = (productId: string) => {
    mutate(productId);
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
