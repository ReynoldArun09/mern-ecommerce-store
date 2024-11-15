import { Badge } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetFooter,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { useGetCartProductsApi } from "@/services/cart/cart-queries";
import { ShoppingCartIcon } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import CartLineItems from "./cartline-items";

export default function CartSheet() {
  const navigate = useNavigate();
  const { data: cartItems } = useGetCartProductsApi();

  const totalAmount = cartItems?.reduce(
    (total, item) => total + item.quantity * item.product.price,
    0
  );
  const count = cartItems?.reduce((total, item) => total + item.quantity, 0);

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant={"outline"} size={"icon"} className="relative">
          {count
            ? count > 0 && (
                <Badge
                  variant="secondary"
                  className="absolute -right-2 -top-2 size-6 justify-center rounded-full p-2.5"
                >
                  {count}
                </Badge>
              )
            : ""}
          <ShoppingCartIcon />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Cart {count && count > 0 && `(${count})`}</SheetTitle>
          <Separator />
          {count && count > 0 ? (
            <>
              <CartLineItems items={cartItems} className="flex-1" />
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="flex-1">Shipping</span>
                  <span className="text-green-500">Free</span>
                </div>
                <div className="flex justify-between">
                  <span>Total</span>
                  <span>{totalAmount?.toFixed(2)}</span>
                </div>
              </div>
              <SheetFooter>
                <SheetTrigger asChild>
                  <Button className="w-full" onClick={() => navigate("/cart")}>
                    Continue to checkout
                  </Button>
                </SheetTrigger>
              </SheetFooter>
            </>
          ) : (
            <div className="flex flex-col items-center justify-center h-screen">
              <ShoppingCartIcon className="w-24 h-24 text-muted-foreground" />
              <div className="text-xl font-bold text-muted-foreground">
                Your cart is empty
              </div>
              <SheetTrigger asChild>
                <Link
                  aria-label="Add items to your cart to checkout"
                  to="/"
                  className={cn(
                    buttonVariants({
                      variant: "link",
                      className: "text-sm text-muted-foreground",
                    })
                  )}
                >
                  Add items to your cart to checkout
                </Link>
              </SheetTrigger>
            </div>
          )}
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
