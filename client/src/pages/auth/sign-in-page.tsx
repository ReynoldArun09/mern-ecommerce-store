import AuthWrapper from "@/components/auth/auth-wrapper";
import SignInForm from "@/components/auth/forms/sign-in-form";

export default function SignInPage() {
  return (
    <AuthWrapper auth="sign-in">
      <SignInForm />
    </AuthWrapper>
  );
}
