import { Button } from "@/components/ui/button";
import { Link, Outlet } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { PageHeading } from "@/components/common/typography";

export default function AuthLayout() {
  return (
    <section className="flex w-full min-h-screen">
      <div className="items-center justify-center hidden w-1/2 px-12 bg-white lg:flex">
        <PageHeading content="Welcome to One Stop Store" />
      </div>
      <div className="flex items-center justify-center flex-1 px-4 py-12 bg-background sm:px-6 lg:px-8">
        <Outlet />
        <Button variant={"outline"} className="absolute top-4 right-4" asChild>
          <Link to="/">
            <ArrowLeft /> Back to Home
          </Link>
        </Button>
      </div>
    </section>
  );
}
