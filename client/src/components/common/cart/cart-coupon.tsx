import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useCart } from "@/hooks/useCart";
import { useCouponValidateMutation } from "@/services/coupon/coupon.mutation";
import { useGetCouponApi } from "@/services/coupon/coupon.queries";
import { useState } from "react";

export default function CartCoupon() {
  const [couponValue, setCouponValue] = useState("");
  const { data: coupon } = useGetCouponApi();
  const { mutate, error, isPending } = useCouponValidateMutation();
  const { addDiscount, couponDiscount, removeDiscount } = useCart();

  const handleValidateCoupon = () => {
    mutate(couponValue);
    addDiscount();
  };

  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle className="font-bold tracking-wide text-md">
            Do you have a voucher or gift card?
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-5">
          <div className="space-y-5">
            <Input
              value={couponValue}
              onChange={(e) => setCouponValue(e.target.value)}
            />
            <Button
              type="submit"
              className="w-full"
              onClick={handleValidateCoupon}
              disabled={isPending}
            >
              Apply Code
            </Button>
            {couponDiscount > 0 && (
              <Button
                variant={"destructive"}
                className="w-full"
                onClick={removeDiscount}
              >
                Remove Coupon
              </Button>
            )}
          </div>
          <div>
            {coupon ? (
              <>
                <p>Your Available Coupon:</p>
                <p>{coupon.code} - 10% off</p>
              </>
            ) : (
              <>
                <p>No Coupon Available</p>
              </>
            )}
            {error && (
              <p className="font-bold text-red-500">{error?.message}</p>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
