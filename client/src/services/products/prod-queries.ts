import { keepPreviousData, useQuery } from "@tanstack/react-query";
import {
  GetAllCategoryProductsApi,
  GetAllProductApi,
  GetAllTargetAudienceProductsApi,
  GetFeaturedProductsApi,
  GetPopularCategoryAndCountApi,
  GetRecommendedProductApi,
  GetSingleProductApi,
} from "./prod-api";

export function useGetAllProductsQuery() {
  return useQuery({
    queryKey: ["all-product-list"],
    queryFn: GetAllProductApi,
  });
}

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

export function useGetPaginationCategory(cat: string, page: number) {
  return useQuery({
    queryKey: ["category-pagination", cat, page],
    queryFn: () => GetAllCategoryProductsApi(cat, page),
    placeholderData: keepPreviousData,
  });
}

export function useGetPaginationTarget(type: string, page: number) {
  return useQuery({
    queryKey: ["target-pagination", type, page],
    queryFn: () => GetAllTargetAudienceProductsApi(type, page),
    placeholderData: keepPreviousData,
  });
}
