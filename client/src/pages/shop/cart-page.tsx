import { Card } from "@/components/ui/card";
import CartCoupon from "@/components/common/cart/cart-coupon";
import CartCheckoutDetails from "@/components/common/cart/cart-checkout-details";
import RemoveFromCart from "@/components/common/cart/remove-from-cart";
import UpdateCartQuantity from "@/components/common/update-quantity";
import { PageHeading } from "@/components/common/typography";
import { useCart } from "@/hooks/useCart";
import { ShoppingCart } from "lucide-react";

export default function CartPage() {
  const { cartItems } = useCart();

  return (
    <section className="min-h-screen py-8 mb-10">
      <PageHeading>Shopping Cart</PageHeading>
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
                  <UpdateCartQuantity
                    productId={item.product._id}
                    quantity={item.quantity}
                  />
                </div>
                <div className="font-medium">
                  $ {(item.quantity * item.product.price).toFixed(2)}
                </div>
                <RemoveFromCart productId={item.product._id} />
              </div>
            </Card>
          ))}
          {cartItems?.length === 0 && (
            <div className="flex flex-col items-center space-y-5 justify-center h-[50vh]">
              <ShoppingCart size={35} />
              <PageHeading>Your cart is empty</PageHeading>
            </div>
          )}
        </div>
        {cartItems && cartItems?.length > 0 ? (
          <div className="py-5 space-y-4">
            <CartCheckoutDetails />
            <CartCoupon />
          </div>
        ) : null}
      </div>
    </section>
  );
}
