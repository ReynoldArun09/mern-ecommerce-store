import ShopFeautredProducts from "@/components/shop/shop-featured-products";
import ShopHero from "@/components/shop/shop-hero";
import ShopOurServices from "@/components/shop/shop-our-services";
import ShopPopularCategories from "@/components/shop/shop-popular-categories";

export default function HomePage() {
  return (
    <>
      <ShopHero />
      <ShopPopularCategories />
      <ShopFeautredProducts />
      <ShopOurServices />
    </>
  );
}
