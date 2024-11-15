import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { usePopularCategoryAndCountQuery } from "@/services/products/prod-queries";
import { Box } from "lucide-react";
import PopularCategorySkeleton from "./popular-category-skeleton";
import {
  ComponentHeading,
  ComponentSubHeading,
} from "@/components/common/typography";
import { GridWrapper } from "@/components/common/wrappers";

export default function ShopPopularCategory() {
  const { data: categories, isLoading } = usePopularCategoryAndCountQuery();

  if (isLoading) {
    return (
      <GridWrapper>
        {[1, 2, 3, 4].map((i) => (
          <PopularCategorySkeleton key={i} />
        ))}
      </GridWrapper>
    );
  }

  return (
    <section className="py-3 lg:py-5">
      <div className="space-y-3">
        <ComponentHeading
          content="Popular Category"
          className="text-2xl lg:text-3xl"
        />
        <ComponentSubHeading content="Shop the best of our most-loved categories." />
      </div>
      <GridWrapper>
        {categories?.map((details) => (
          <Card className="font-bold cursor-pointer" key={details.category}>
            <CardHeader>
              <CardTitle className="text-xl tracking-wider">
                {details.category}
              </CardTitle>
              <CardDescription className="text-sm">
                <div className="flex items-center gap-2 py-4">
                  <Box />
                  <span className="text-md">
                    {details.productCount || 0} Products
                  </span>
                </div>
              </CardDescription>
            </CardHeader>
          </Card>
        ))}
      </GridWrapper>
    </section>
  );
}
