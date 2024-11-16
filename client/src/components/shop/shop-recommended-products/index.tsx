import Product from "@/components/common/product";
import ProductSkeleton from "@/components/common/product-skeleton";
import { PageHeading } from "@/components/common/typography";
import { ComponentWrapper, GridWrapper } from "@/components/common/wrapper";
import { useGetRecommendedProducts } from "@/services/products/prod-queries";

export default function ShopRecommendedProducts() {
  const { data: recommended, isLoading, error } = useGetRecommendedProducts();
  return (
    <ComponentWrapper>
      <PageHeading>Recommended Products</PageHeading>
      <GridWrapper>
        {isLoading &&
          [1, 2, 3, 4].map((i) => (
            <ProductSkeleton key={`recommended-product-${i}`} />
          ))}
        {recommended?.map((details) => (
          <Product product={details} key={details._id} viewable={false} />
        ))}
        {!recommended ||
          (recommended.length === 0 && (
            <div className="text-center text-gray-500">
              No Products available at the moment.
            </div>
          ))}
        {error && (
          <div className="text-center text-red-600">
            Something went wrong while fetching Products. Please try again
            later.
          </div>
        )}
      </GridWrapper>
    </ComponentWrapper>
  );
}
