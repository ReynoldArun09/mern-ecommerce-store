import AuthButtons from "./auth-buttons";
import CartSheet from "./cart-sheet";

export default function DesktopRightMenu() {
  return (
    <div className="flex items-center gap-4">
      <CartSheet />
      <AuthButtons />
    </div>
  );
}
