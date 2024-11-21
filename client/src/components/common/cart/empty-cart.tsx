import { buttonVariants } from "@/components/ui/button";
import { SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { PageHeading } from "../typography";
import { ComponentFlexWrapper } from "../wrapper";
import { Link } from "react-router-dom";
import { ShoppingCartIcon } from "lucide-react";

export default function EmptyCart() {
  return (
    <ComponentFlexWrapper className="items-center h-screen space-y-3">
      <ShoppingCartIcon className="w-12 h-12" />
      <PageHeading>Your cart is empty</PageHeading>
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
    </ComponentFlexWrapper>
  );
}
