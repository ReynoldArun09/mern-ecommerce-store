import { useQuery } from "@tanstack/react-query";
import { GetCartProductsApi } from "./cart-api";
import { useVerifyAuthApi } from "../auth/auth-queries";

export function useGetCartProductsApi() {
  const {
    data: isAuth,
    isLoading: isAuthLoading,
    isError: isAuthError,
  } = useVerifyAuthApi();
  const isAuthenticated = Boolean(isAuth);

  return useQuery({
    queryKey: ["cart-products"],
    queryFn: GetCartProductsApi,
    refetchOnWindowFocus: true,
    refetchOnReconnect: true,
    enabled: isAuthenticated && !isAuthLoading && !isAuthError,
  });
}
