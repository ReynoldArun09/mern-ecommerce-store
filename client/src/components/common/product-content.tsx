import { useGetSingleProduct } from "@/services/products/prod-queries";
import { useParams } from "react-router-dom";
import { PageDescription, PageHeading, PageSubHeading } from "./typography";
import { Separator } from "../ui/separator";
import AddToCartButton from "./add-to-cart-button";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";

export default function ProductContent() {
  const { id } = useParams<{ id: string }>();
  const { data: product } = useGetSingleProduct(id!);

  if (!product) {
    return;
  }

  return (
    <div className="flex flex-col gap-5 py-10 md:flex-row md:gap-20">
      <div className="flex-1">
        <img
          src={product?.image || "/product-placeholder.webp"}
          alt={product?.name}
          className="w-full h-[50vh]"
        />
      </div>
      <div className="flex-1 space-y-5">
        <div className="space-y-2.5">
          <PageHeading>{product?.name}</PageHeading>
          <PageSubHeading>$ {product?.price}</PageSubHeading>
          <PageSubHeading as="h3">{product?.brand}</PageSubHeading>
          <Badge>{product.targetAudience}</Badge>
        </div>
        <Separator />
        <div className="space-y-3">
          <div className="flex gap-4 w-fit">
            <AddToCartButton productId={product?._id} product={product} />
            <Button variant={"outline"}>Buy now</Button>
          </div>
        </div>
        <Separator />
        <div className="space-y-3">
          <PageHeading size={"sm"}>Description</PageHeading>
          <PageDescription>{product?.description}</PageDescription>
        </div>
      </div>
    </div>
  );
}
