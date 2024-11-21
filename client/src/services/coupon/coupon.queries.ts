import { useQuery } from "@tanstack/react-query";
import { GetCouponApi } from "./coupon.api";
import { useVerifyAuthApi } from "../auth/auth-queries";

export function useGetCouponApi() {
  const {
    data: isAuth,
    isLoading: isAuthLoading,
    isError: isAuthError,
  } = useVerifyAuthApi();
  const isAuthenticated = Boolean(isAuth);
  return useQuery({
    queryKey: ["coupon-get"],
    queryFn: GetCouponApi,
    enabled: isAuthenticated && !isAuthLoading && !isAuthError,
  });
}
