import { PageHeading, PageSubHeading } from "@/components/common/typography";
import { ComponentWrapper, GridWrapper } from "@/components/common/wrapper";
import { useGetProductFeaturedQuery } from "@/services/products/prod-queries";
import Product from "@/components/common/product";
import ProductSkeleton from "@/components/common/product-skeleton";

export default function ShopFeautredProducts() {
  const { data: featuredProducts, isLoading } = useGetProductFeaturedQuery();
  return (
    <ComponentWrapper>
      <PageHeading>Featured products</PageHeading>
      <PageSubHeading>
        Discover amazing products from diverse categories
      </PageSubHeading>
      <GridWrapper>
        {isLoading &&
          [1, 2, 3, 4].map((i) => (
            <ProductSkeleton key={`featured-product-${i}`} />
          ))}
        {featuredProducts?.map((product) => (
          <Product product={product} key={product._id} viewable={true} />
        ))}
      </GridWrapper>
    </ComponentWrapper>
  );
}
