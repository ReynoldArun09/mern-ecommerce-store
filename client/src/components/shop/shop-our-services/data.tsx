import { CreditCard, Headphones, PackageSearch, Truck } from "lucide-react";

export const services = [
  {
    title: "100% Return Policy",
    description:
      "Shop with confidence! We offer a hassle-free return policy, ensuring you’re completely satisfied with your purchase. If you're not happy, simply return it within 30 days for a full refund—no questions asked.",
    icon: <PackageSearch size={30} />,
  },
  {
    title: "Free Delivery",
    description:
      "Enjoy free delivery on all orders! We believe in making your shopping experience as seamless as possible, so you can focus on what you love without worrying about shipping costs.",
    icon: <Truck size={30} />,
  },
  {
    title: "Secure Payment Options",
    description:
      "Your security is our priority. We offer a variety of secure payment methods, including credit cards, PayPal, and more, so you can shop safely and confidently.",
    icon: <CreditCard size={30} />,
  },
  {
    title: "24/7 Customer Support",
    description:
      "We’re here for you anytime! Our dedicated customer support team is available 24/7 to assist with any questions or concerns you may have. Your satisfaction is our top priority.",
    icon: <Headphones size={30} />,
  },
];
