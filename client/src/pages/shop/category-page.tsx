import Product from "@/components/common/product";
import ProductSkeleton from "@/components/common/product-skeleton";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationPrevious,
  PaginationNext,
} from "@/components/ui/pagination";
import { useGetPaginationCategory } from "@/services/products/prod-queries";
import { useLocation } from "react-router-dom";

export default function CategoryPage() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const cat = queryParams.get("cat") || "Clothes";
  const page = Number(queryParams.get("")) || 1;

  const { data, isLoading } = useGetPaginationCategory(cat, page);
  const categoryProducts = data?.data;

  const handlePreviousPage = () => {
    if (data?.pagination.first) return;
    const newPage = page - 1;
    queryParams.set("page", newPage.toString());
  };
  const handleNextPage = () => {
    if (data?.pagination.last) return;
    const newPage = page + 1;
    queryParams.set("page", newPage.toString());
  };

  return (
    <section className="py-5">
      <div className="grid grid-cols-2 gap-4 py-4 sm:grid-cols-3 md:grid-cols-4">
        {categoryProducts?.map((product) => (
          <Product product={product} key={product._id} />
        ))}
        {isLoading &&
          [1, 2, 3, 4].map((i) => (
            <ProductSkeleton key={`category-page-${i}`} />
          ))}
      </div>
      <div>
        <Pagination className="cursor-pointer">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious onClick={handlePreviousPage} />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext onClick={handleNextPage} />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </section>
  );
}
