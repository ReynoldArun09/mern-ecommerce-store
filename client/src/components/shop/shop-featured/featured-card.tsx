import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { FeaturedResponse } from "@/services/types";
import FeaturedDetails from "./featured-details";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export default function FeaturedCard({
  product,
}: {
  product: FeaturedResponse;
}) {
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
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-bold">{product.name}</h1>
        </div>
        <p className="font-bold text-gray-500">$ {product.price}</p>
      </CardHeader>
      <CardContent className="py-4 pt-0">
        <p className="text-gray-600 text-md line-clamp-1">
          {product.description || "No description available"}
        </p>
      </CardContent>
      <CardFooter className="gap-2 py-4 pt-0">
        <Button className="w-full">Add to Cart</Button>
        <FeaturedDetails product={product} />
      </CardFooter>
    </Card>
  );
}
