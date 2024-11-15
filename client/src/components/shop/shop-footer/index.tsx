import SiteLogo from "@/components/common/site-logo";
import FooterLinks from "./footer-links";

export default function ShopFooter() {
  return (
    <footer className="border-t-[1px]">
      <div className="container py-5 mx-auto space-y-5">
        <SiteLogo />
        <FooterLinks />
        <div>
          <p className="font-bold text-gray-500">
            &copy; {new Date().getFullYear()} One Stop Store
          </p>
        </div>
      </div>
    </footer>
  );
}
