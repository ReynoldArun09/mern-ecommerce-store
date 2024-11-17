import { PageDescription, PageHeading } from "@/components/common/typography";
import { ComponentFlexWrapper } from "@/components/common/wrapper";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ArrowRight, CircleCheckBig } from "lucide-react";
import { Link } from "react-router-dom";

export default function PurchaseSuccessPage() {
  return (
    <ComponentFlexWrapper className="items-center h-screen">
      <Card className="space-y-2.5">
        <CardContent>
          <div className="space-y-5">
            <CircleCheckBig className="w-full h-32 py-3 text-green-500" />
            <PageHeading>Purchase Successfull</PageHeading>
            <PageDescription>
              Thank you for your order. We're processing it now.
            </PageDescription>
          </div>
          <div className="py-5">
            <Link to="/" className={cn(buttonVariants({ variant: "default" }))}>
              Continue Shopping <ArrowRight />
            </Link>
          </div>
        </CardContent>
      </Card>
    </ComponentFlexWrapper>
  );
}
