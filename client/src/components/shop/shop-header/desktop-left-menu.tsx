import SiteLogo from "@/components/common/site-logo";
import NavLinks from "./nav-links";

export default function DesktopLeftMenu() {
  return (
    <div className="items-center hidden md:flex gap-x-12">
      <SiteLogo />
      <NavLinks />
    </div>
  );
}
