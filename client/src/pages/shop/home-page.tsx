import ShopFeaturedProducts from "@/components/shop/shop-featured";
import ShopHero from "@/components/shop/shop-hero";
import ShopOurServices from "@/components/shop/shop-our-services";
import ShopPopularCategory from "@/components/shop/shop-popular-category";

export default function HomePage() {
  return (
    <>
      <ShopHero />
      <ShopPopularCategory />
      <ShopFeaturedProducts />
      <ShopOurServices />
    </>
  );
}
