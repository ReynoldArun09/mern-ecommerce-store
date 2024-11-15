import AuthWrapper from "@/components/auth/auth-wrapper";
import SignUpForm from "@/components/auth/forms/sign-up-form";

export default function SignUpPage() {
  return (
    <AuthWrapper auth="sign-up">
      <SignUpForm />
    </AuthWrapper>
  );
}
