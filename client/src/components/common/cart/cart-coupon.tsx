import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function CartCoupon() {
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
            <Input />
            <Button className="w-full">Apply Code</Button>
          </div>
          <div>
            <p>You Available Coupon</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
