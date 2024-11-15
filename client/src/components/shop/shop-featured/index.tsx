import FeaturedCard from "./featured-card";
import { useGetProductFeaturedQuery } from "@/services/products/prod-queries";
import FeaturedCardSkeleton from "./featured-card-skeleton";
import { GridWrapper } from "@/components/common/wrappers";
import {
  ComponentHeading,
  ComponentSubHeading,
} from "@/components/common/typography";

export default function ShopFeaturedProducts() {
  const { data: featuredProducts, isLoading } = useGetProductFeaturedQuery();

  if (isLoading) {
    return (
      <GridWrapper>
        {[1, 2, 3, 4].map((i) => (
          <FeaturedCardSkeleton key={i} />
        ))}
      </GridWrapper>
    );
  }

  return (
    <section className="sm:py-3 lg:py-5">
      <div className="flex items-center justify-between py-3">
        <div className="space-y-3">
          <ComponentHeading
            content="Featured products"
            className="text-2xl lg:text-3xl"
          />
          <ComponentSubHeading content="Discover amazing products from diverse categories" />
        </div>
      </div>

      <GridWrapper>
        {featuredProducts?.map((product) => (
          <FeaturedCard product={product} key={product._id} />
        ))}
      </GridWrapper>
    </section>
  );
}
