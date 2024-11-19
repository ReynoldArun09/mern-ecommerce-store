import { useMutation } from "@tanstack/react-query";
import { ValidateCouponApi } from "./coupon.api";

export function useUpdateQuantityMutation() {
  return useMutation({
    mutationKey: ["coupon-validate"],
    mutationFn: ValidateCouponApi,
  });
}
