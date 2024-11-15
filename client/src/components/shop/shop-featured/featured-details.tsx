import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { FeaturedResponse } from "@/services/types";

export default function FeaturedDetails({
  product,
}: {
  product: FeaturedResponse;
}) {
  return (
    <section>
      <Dialog>
        <DialogTrigger>
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
            <h1 className="text-2xl font-bold capitalize">{product.name}</h1>
            <h2 className="text-gray-500 text-md">
              {product.description || "No description available"}
            </h2>
            <h2 className="py-2 font-bold">$ {product.price}</h2>
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
            <Button>Add to Cart</Button>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
