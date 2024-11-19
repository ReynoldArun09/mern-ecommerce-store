import { useMutation } from "@tanstack/react-query";
import { ValidateCouponApi } from "./coupon.api";

export function useCouponValidateMutation() {
  return useMutation({
    mutationKey: ["coupon-validate"],
    mutationFn: ValidateCouponApi,
  });
}
