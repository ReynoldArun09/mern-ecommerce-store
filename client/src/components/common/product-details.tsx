import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ProductType } from "@/services/types";
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";
import AddToCartButton from "./add-to-cart-button";
import { PageDescription, PageHeading } from "./typography";

export default function ProductDetails({ product }: { product: ProductType }) {
  return (
    <section>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant={"outline"}>Quick view</Button>
        </DialogTrigger>
        <DialogContent>
          <div>
            <img
              src={product.image || "/product-placeholder.webp"}
              alt={product.name}
              className="w-full h-full"
            />
          </div>
          <div className="space-y-3">
            <PageHeading className="capitalize">{product.name}</PageHeading>
            <PageDescription>
              {product.description || "No description available"}
            </PageDescription>
            <PageDescription>$ {product.price}</PageDescription>
            <div className="flex items-center justify-between">
              <h3>{product.category}</h3>
              <Badge>{product.targetAudience}</Badge>
            </div>
            <div className="flex items-center justify-between">
              <h4 className="font-bold text-gray-400">{product.brand}</h4>
              <h5 className="font-bold">{product.stock} in stock</h5>
            </div>
          </div>
          <div>
            <span className="text-sm text-gray-500">
              Added {new Date(product.createdAt).toLocaleDateString()}
            </span>
          </div>
          <div>
            <AddToCartButton
              productId={product._id}
              product={product}
              quantity={1}
            />
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
