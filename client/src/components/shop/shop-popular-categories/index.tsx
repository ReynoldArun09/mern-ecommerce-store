import { PageHeading, PageSubHeading } from "@/components/common/typography";
import { ComponentWrapper, GridWrapper } from "@/components/common/wrapper";
import PopularCategorySkeleton from "./popular-category-skeleton";
import { usePopularCategoryAndCountQuery } from "@/services/products/prod-queries";
import PopularCategoryCard from "./popular-category-card";

export default function ShopPopularCategories() {
  const {
    data: categories,
    isLoading,
    error,
  } = usePopularCategoryAndCountQuery();
  return (
    <ComponentWrapper>
      <PageHeading>Popular Category</PageHeading>
      <PageSubHeading size={"lg"}>
        Shop the best of our most-loved categories.
      </PageSubHeading>
      <GridWrapper>
        {isLoading &&
          [1, 2, 3, 4].map((i) => (
            <PopularCategorySkeleton key={`popular-categories-${i}`} />
          ))}
        {categories?.map((details) => (
          <PopularCategoryCard details={details} key={details.category} />
        ))}
        {!categories ||
          (categories.length === 0 && (
            <div className="text-center text-gray-500">
              No categories available at the moment.
            </div>
          ))}
        {error && (
          <div className="text-center text-red-600">
            Something went wrong while fetching categories. Please try again
            later.
          </div>
        )}
      </GridWrapper>
    </ComponentWrapper>
  );
}
