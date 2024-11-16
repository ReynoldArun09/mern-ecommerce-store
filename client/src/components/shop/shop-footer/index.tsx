import SiteLogo from "@/components/common/site-logo";
import FooterLinks from "./footer-links";
import { PageDescription } from "@/components/common/typography";

export default function ShopFooter() {
  return (
    <footer className="border-t-[1px]">
      <div className="container py-5 mx-auto space-y-5">
        <SiteLogo />
        <FooterLinks />
        <div>
          <PageDescription>&copy; 2024 One Stop Store</PageDescription>
        </div>
      </div>
    </footer>
  );
}
