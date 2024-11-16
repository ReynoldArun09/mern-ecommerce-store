import { PageHeading } from "@/components/common/typography";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowLeft } from "lucide-react";
import { Link, Outlet } from "react-router-dom";

export default function AuthLayout() {
  return (
    <section className="flex w-full min-h-screen">
      <div className="items-center justify-center hidden w-1/2 px-12 text-black bg-white lg:flex">
        <PageHeading>Welcome to One Stop Store</PageHeading>
      </div>
      <div className="flex items-center justify-center flex-1 px-4 py-12 bg-background sm:px-6 lg:px-8">
        <Outlet />
        <Link
          to="/"
          className={cn(
            buttonVariants({ variant: "outline" }),
            "absolute top-4 right-4"
          )}
        >
          <ArrowLeft /> Back to Home
        </Link>
      </div>
    </section>
  );
}
