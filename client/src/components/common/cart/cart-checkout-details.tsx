import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { axiosInstance } from "@/services/axios";
import { useGetCartProductsApi } from "@/services/cart/cart-queries";
import { Separator } from "@radix-ui/react-separator";
import { loadStripe } from "@stripe/stripe-js";
import { toast } from "sonner";
import { PageHeading } from "../typography";

export default function CartCheckoutDetails() {
  const { data: cartItems } = useGetCartProductsApi();

  const totalAmount = cartItems?.reduce(
    (total, item) => total + item.quantity * item.product.price,
    0
  );
  const handlePayment = async () => {
    const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_KEY);
    const stripe = await stripePromise;
    const response = await axiosInstance.post(
      "/payments/create-checkout-session",
      {
        products: cartItems,
      }
    );
    const session = response.data;
    const result = await stripe?.redirectToCheckout({
      sessionId: session.id,
    });

    if (result?.error) {
      toast.error("something went wrong");
    }
  };

  return (
    <div>
      <Card>
        <CardHeader>
          <PageHeading>Order Summary</PageHeading>
        </CardHeader>
        <CardContent className="space-y-5">
          <div>
            <div className="flex justify-between">
              <span>Shipping</span>
              <span className="text-green-500">Free</span>
            </div>
          </div>
          <Separator />
          <div className="space-y-5">
            <div className="flex justify-between">
              <span>Total</span>
              <span>$ {totalAmount?.toFixed(2)}</span>
            </div>
            <Button className="w-full" onClick={handlePayment}>
              Proceed to Checkout
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
