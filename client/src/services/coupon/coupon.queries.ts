import { useQuery } from "@tanstack/react-query";
import { GetCouponApi } from "./coupon.api";

export function useGetCouponApi() {
  return useQuery({
    queryKey: ["coupon-get"],
    queryFn: GetCouponApi,
  });
}
