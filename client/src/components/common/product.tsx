import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import ProductDetails from "./product-details";
import { ProductType } from "@/services/types";
import AddToCartButton from "./add-to-cart-button";
import { PageDescription, PageHeading } from "./typography";

interface ProductProps {
  product: ProductType;
  viewable?: boolean;
}

export default function Product({ product, viewable = false }: ProductProps) {
  const navigate = useNavigate();
  return (
    <Card>
      <div onClick={() => navigate(`/product/${product._id}`)}>
        <img
          src={product.image || "/product-placeholder.webp"}
          alt={product.name}
        />
      </div>
      <CardHeader className="py-2">
        <PageHeading size={"sm"} className="line-clamp-1">
          {product.name}
        </PageHeading>
        <PageDescription>$ {product.price}</PageDescription>
      </CardHeader>
      <CardContent className="py-4 pt-0">
        <PageDescription size={"sm"} className="line-clamp-2">
          {product.description}
        </PageDescription>
      </CardContent>
      <CardFooter className="gap-2 py-4 pt-0">
        <AddToCartButton productId={product._id} product={product} />
        {viewable && <ProductDetails product={product} />}
      </CardFooter>
    </Card>
  );
}
