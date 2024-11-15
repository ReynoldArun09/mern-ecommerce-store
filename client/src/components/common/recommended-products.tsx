import { useGetRecommendedProducts } from "@/services/products/prod-queries";
import { Button } from "../ui/button";
import { Card, CardHeader, CardContent, CardFooter } from "../ui/card";
import { useNavigate } from "react-router-dom";
import { GridWrapper } from "./wrappers";
import { ComponentHeading } from "./typography";

export default function RecommendedProducts() {
  const navigate = useNavigate();
  const { data: products } = useGetRecommendedProducts();
  return (
    <section className="pt-2 pb-10">
      <ComponentHeading content="Recommended Products" />
      <GridWrapper>
        {products?.map((product) => (
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
            </CardFooter>
          </Card>
        ))}
      </GridWrapper>
    </section>
  );
}
