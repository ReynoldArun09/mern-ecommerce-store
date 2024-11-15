import { useQuery } from "@tanstack/react-query";
import {
  GetFeaturedProductsApi,
  GetPopularCategoryAndCountApi,
  GetSingleProductApi,
} from "./prod-api";

export function useGetProductFeaturedQuery() {
  return useQuery({
    queryKey: ["product-featured"],
    queryFn: GetFeaturedProductsApi,
  });
}

export function usePopularCategoryAndCountQuery() {
  return useQuery({
    queryKey: ["popular-product"],
    queryFn: GetPopularCategoryAndCountApi,
  });
}

export function useGetSingleProduct(id: string) {
  return useQuery({
    queryKey: ["single-product"],
    queryFn: () => GetSingleProductApi(id),
  });
}
