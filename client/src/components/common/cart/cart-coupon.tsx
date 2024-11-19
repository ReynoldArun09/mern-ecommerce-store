import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useGetCouponApi } from "@/services/coupon/coupon.queries";

export default function CartCoupon() {
  const { data: coupon } = useGetCouponApi();

  console.log(coupon);

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
            <Input value={coupon?.code} readOnly />
            <Button className="w-full">Apply Code</Button>
          </div>
          <div>
            {coupon ? (
              <>
                <p>Your Available Coupon:</p>
                <p>{coupon?.code} - 10% off</p>
              </>
            ) : (
              <>
                <p>No Coupon Available</p>
              </>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
