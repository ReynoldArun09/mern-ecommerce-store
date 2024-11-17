import Product from "@/components/common/product";
import ProductSkeleton from "@/components/common/product-skeleton";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useGetPaginationTarget } from "@/services/products/prod-queries";
import { useLocation, useNavigate } from "react-router-dom";

export default function ShopPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);

  const type = queryParams.get("type") || "men";
  const page = Number(queryParams.get("page")) || 1;

  const { data, isLoading } = useGetPaginationTarget(type, page);
  const targetProducts = data?.data;

  const handlePreviousPage = () => {
    if (data?.pagination.first) return;
    const newPage = page - 1;
    queryParams.set("page", newPage.toString());
    navigate({ search: queryParams.toString() });
  };
  const handleNextPage = () => {
    if (data?.pagination.last) return;
    const newPage = page + 1;
    console.log(newPage);
    queryParams.set("page", newPage.toString());
    navigate({ search: queryParams.toString() });
  };

  return (
    <section className="py-5">
      <div className="grid grid-cols-2 gap-4 py-4 sm:grid-cols-3 md:grid-cols-4">
        {targetProducts?.map((target) => (
          <Product product={target} key={target._id} />
        ))}
        {isLoading &&
          [1, 2, 3, 4].map((i) => <ProductSkeleton key={`shop-page-${i}`} />)}
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
