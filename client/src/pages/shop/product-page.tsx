import RecommendedProducts from "@/components/common/recommended-products";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import useCart from "@/hooks/useCart";
import { useVerifyAuthApi } from "@/services/auth/auth-queries";
import { useAddToCartMutation } from "@/services/cart/cart-mutation";
import { useGetSingleProduct } from "@/services/products/prod-queries";
import { useParams } from "react-router-dom";

export default function ProductPage() {
  const { id } = useParams<{ id: string }>();
  const { data: product } = useGetSingleProduct(id!);
  const { data: isAuth } = useVerifyAuthApi();

  const { mutate } = useAddToCartMutation();
  const { addToCartInLocalStorage } = useCart();

  const addProductToCart = (productId: string) => {
    try {
      if (isAuth) {
        mutate(productId);
      } else {
        addToCartInLocalStorage(productId);
      }
    } catch (err) {
      console.error("Error adding to cart:", err);
    }
  };

  const handleAddToCartClick = () => {
    if (!product?._id) {
      console.warn("Product ID is missing");
      return;
    }

    addProductToCart(product._id);
  };

  return (
    <section>
      <div className="flex flex-col gap-5 py-10 md:flex-row md:gap-20">
        <div className="flex-1">
          <img
            src={product?.image || "/product-placeholder.webp"}
            alt=""
            className="h-[60vh] w-full"
          />
        </div>
        <div className="flex-1 space-y-5">
          <div className="space-y-3">
            <h1 className="text-2xl font-bold">{product?.name}</h1>
            <h2 className="text-gray-500 font0bold">$ {product?.price}</h2>
            <h3>{product?.brand}</h3>
            <div className="flex items-center gap-4">
              <h4>{product?.category}</h4>
              <Badge>{product?.targetAudience}</Badge>
            </div>
          </div>
          <Separator />
          <div className="space-y-5">
            <h1 className="font-bold text-green-500">
              {product?.stock} in stock
            </h1>
            <div className="flex items-center gap-4">
              <Button variant={"secondary"}>Buy Now</Button>
              <Button onClick={handleAddToCartClick}>Add to cart</Button>
            </div>
          </div>
          <Separator />
          <div className="space-y-5">
            <h1 className="text-xl font-bold">Description</h1>
            <p>{product?.description}</p>
          </div>
        </div>
      </div>
      <RecommendedProducts />
    </section>
  );
}
