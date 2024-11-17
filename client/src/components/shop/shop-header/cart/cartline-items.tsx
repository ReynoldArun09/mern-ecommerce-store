import RemoveFromCart from "@/components/common/cart/remove-from-cart";
import UpdateCartQuantity from "@/components/common/update-quantity";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ProductResponse } from "@/services/types";

interface CartLineItemsProps {
  _id: string;
  product: ProductResponse;
  quantity: number;
}

export default function CartLineItems({
  items,
}: {
  items: CartLineItemsProps[];
}) {
  return (
    <ScrollArea className="h-[80vh]">
      <section className="py-3 md:py-5">
        {items?.map((item) => (
          <div key={item.product.name} className="space-y-3">
            <div>
              <h1 className="font-bold tracking-wider">{item.product.name}</h1>
            </div>
            <div className="flex justify-between">
              <div className="w-24 h-24">
                <img src="/product-placeholder.webp" alt="" />
              </div>
              <div className="flex flex-col items-center gap-2 mt-2">
                <UpdateCartQuantity
                  productId={item.product._id}
                  quantity={item.quantity}
                />
                <span>{(item.product.price * item.quantity).toFixed(2)}</span>
              </div>
              <div className="mt-4">
                <RemoveFromCart productId={item.product._id} />
              </div>
            </div>
          </div>
        ))}
      </section>
    </ScrollArea>
  );
}
