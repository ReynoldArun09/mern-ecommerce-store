import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

export default function ShopNowButton() {
  return (
    <Link
      to="/shop?type=all"
      className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
    >
      Shop now
    </Link>
  );
}
