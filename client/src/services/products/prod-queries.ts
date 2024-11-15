import { useQuery } from "@tanstack/react-query";
import {
  GetFeaturedProductsApi,
  GetPopularCategoryAndCountApi,
  GetRecommendedProductApi,
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

export function useGetRecommendedProducts() {
  return useQuery({
    queryKey: ["recommended-products"],
    queryFn: GetRecommendedProductApi,
  });
}
