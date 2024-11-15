import {
  ComponentSubHeading,
  PageHeading,
} from "@/components/common/typography";
import ShopHeroButtons from "./shop-hero-button";

export default function ShopHero() {
  return (
    <section className="flex flex-col space-y-3 items-center justify-center w-full text-center h-[40vh]">
      <PageHeading content="Your One-Stop Shopping Destination" />
      <ComponentSubHeading
        className="mx-auto sm:w-1/2 md:w-2/3"
        content="Explore a world of fashion, where every click brings you the latest
          trends and timeless classics to express your unique style."
      />
      <ShopHeroButtons />
    </section>
  );
}
