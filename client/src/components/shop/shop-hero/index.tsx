import { PageHeading, PageSubHeading } from "@/components/common/typography";
import { ComponentFlexWrapper } from "@/components/common/wrapper";
import ShopNowButton from "./shop-now-button";

export default function ShopHero() {
  return (
    <ComponentFlexWrapper className="h-[40vh] items-center space-y-5">
      <PageHeading size={"big"}>Your One-Stop Shopping Destination</PageHeading>
      <PageSubHeading>
        Explore a world of fashion, where every click brings you the latest
        trends and timeless classics to express your unique style.
      </PageSubHeading>
      <ShopNowButton />
    </ComponentFlexWrapper>
  );
}
