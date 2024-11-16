import DesktopLeftMenu from "./desktop/desktop-left-menu";
import DesktopRightMenu from "./desktop/desktop-right-menu";
import MobileLeftMenu from "./mobile/mobile-left-menu";

export default function ShopHeader() {
  return (
    <header className="border-b-[1px] relative">
      <div className="container flex items-center justify-between h-16 mx-auto">
        <MobileLeftMenu />
        <DesktopLeftMenu />
        <DesktopRightMenu />
      </div>
    </header>
  );
}
