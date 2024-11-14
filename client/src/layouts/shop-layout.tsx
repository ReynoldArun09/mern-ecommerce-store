import ShopFooter from "@/components/shop/shop-footer";
import ShopHeader from "@/components/shop/shop-header";
import { Outlet } from "react-router-dom";

export default function ShopLayout() {
  return (
    <>
      <ShopHeader />
      <main className="container mx-auto">
        <Outlet />
      </main>
      <ShopFooter />
    </>
  );
}
