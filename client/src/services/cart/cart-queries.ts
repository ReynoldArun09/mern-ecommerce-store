import { useQuery } from "@tanstack/react-query";
import { GetCartProductsApi } from "./cart-api";

export function useGetCartProductsApi() {
  return useQuery({
    queryKey: ["cart-products"],
    queryFn: GetCartProductsApi,
    refetchOnWindowFocus: true,
    refetchOnReconnect: true,
  });
}
