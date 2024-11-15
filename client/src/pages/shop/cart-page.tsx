import { MinusIcon, PlusIcon, XIcon } from "@/components/common/icons";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  useRemoveFromCartMutation,
  useUpdateQuantityMutation,
} from "@/services/cart/cart-mutation";
import { useGetCartProductsApi } from "@/services/cart/cart-queries";
import { Separator } from "@radix-ui/react-separator";
import { ShoppingCartIcon } from "lucide-react";

export default function CartPage() {
  const { data: cartItems } = useGetCartProductsApi();

  const { mutate } = useRemoveFromCartMutation();
  const { mutate: update } = useUpdateQuantityMutation();

  const handleRemoveFromCart = (productId: string) => {
    mutate(productId);
  };

  const handleUpdateIncrement = (
    productId: string,
    currentQuantity: number
  ) => {
    update({ productId, quantity: currentQuantity + 1 });
  };

  const handleUpdatDecrement = (productId: string, currentQuantity: number) => {
    update({ productId, quantity: currentQuantity - 1 });
  };

  const totalAmount = cartItems?.reduce(
    (total, item) => total + item.quantity * item.product.price,
    0
  );

  return (
    <section className="max-h-screen py-8 mb-10">
      <h1 className="text-3xl font-bold">Shopping Cart</h1>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <div className="col-span-2 py-5 space-y-5">
          {cartItems?.map((item) => (
            <Card key={item._id}>
              <div className="flex items-center gap-6">
                <img
                  src={item.product.image || "/product-placeholder.webp"}
                  alt={item.product.name}
                  className="w-24 h-24 rounded-md"
                />
                <div className="flex-1">
                  <h3 className="font-semibold">{item.product.name}</h3>
                </div>
                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() =>
                      handleUpdatDecrement(item.product._id, item.quantity)
                    }
                  >
                    <MinusIcon className="w-4 h-4" />
                  </Button>
                  <span className="font-medium">{item.quantity}</span>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() =>
                      handleUpdateIncrement(item.product._id, item.quantity)
                    }
                  >
                    <PlusIcon className="w-4 h-4" />
                  </Button>
                </div>
                <div className="font-medium">
                  $ {(item.quantity * item.product.price).toFixed(2)}
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => handleRemoveFromCart(item.product._id)}
                >
                  <XIcon className="w-4 h-4" />
                </Button>
              </div>
            </Card>
          ))}
          {cartItems?.length === 0 && (
            <div className="flex flex-col items-center justify-center h-full">
              <ShoppingCartIcon className="w-24 h-24 text-muted-foreground" />
              <div className="text-xl font-bold text-muted-foreground">
                Your cart is empty
              </div>
            </div>
          )}
        </div>
        <div className="py-5 space-y-4">
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-bold">
                  Order Summary
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-5">
                <div>
                  <div className="flex justify-between">
                    <span>Shipping</span>
                    <span className="text-green-500">Free</span>
                  </div>
                </div>
                <Separator />
                <div className="space-y-5">
                  <div className="flex justify-between">
                    <span>Total</span>
                    <span>$ {totalAmount?.toFixed(2)}</span>
                  </div>
                  <Button className="w-full">Proceed to Checkout</Button>
                </div>
              </CardContent>
            </Card>
          </div>
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="font-bold tracking-wide text-md">
                  Do you have a voucher or gift card?
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-5">
                <div className="space-y-5">
                  <Input />
                  <Button className="w-full">Apply Code</Button>
                </div>
                <div>
                  <p>You Available Coupon</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
