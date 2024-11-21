import { Button } from "@/components/ui/button";
import { useCart } from "@/hooks/useCart";
import { useSignOut } from "@/services/auth/auth-mutation";
import { useVerifyAuthApi } from "@/services/auth/auth-queries";
import { useNavigate } from "react-router-dom";
import ThemeButton from "./theme-button";

export default function AuthButtons() {
  const navigate = useNavigate();
  const { data: isAuthenticated } = useVerifyAuthApi();
  const { mutate: SignOut } = useSignOut();
  const { clearLocalStorage } = useCart();

  const handleSignOut = () => {
    clearLocalStorage();
    SignOut();
  };
  return (
    <div className="flex items-center gap-3">
      {!isAuthenticated && (
        <>
          <Button variant={"outline"} onClick={() => navigate("/auth/sign-in")}>
            Sign In
          </Button>
          <Button onClick={() => navigate("/auth/sign-up")}>Sign Up</Button>
          <ThemeButton />
        </>
      )}
      {isAuthenticated?.data.role === "admin" && (
        <Button
          variant={"secondary"}
          onClick={() => navigate("/admin/dashboard")}
        >
          Admin Dashboard
        </Button>
      )}
      {isAuthenticated && (
        <>
          <Button onClick={handleSignOut}>Sign Out</Button>
        </>
      )}
    </div>
  );
}
