import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader } from "../ui/card";

interface AuthWrapperProps {
  children?: React.ReactNode;
  auth: "sign-in" | "sign-up";
}

export default function AuthWrapper({ children, auth }: AuthWrapperProps) {
  return (
    <Card className="w-[400px]">
      <CardHeader className="text-3xl font-bold tracking-tight text-foreground">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight text-foreground">
            {auth === "sign-in" ? "Welcome back" : "Join our community"}
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            {auth === "sign-in"
              ? "New to our platform ?"
              : "Already have an account ?"}
            <Link
              className="ml-1 font-medium underline text-primary"
              to={auth === "sign-in" ? "/auth/sign-up" : "/auth/sign-in"}
            >
              {auth === "sign-in" ? "Create an account" : "Sign in"}
            </Link>
          </p>
        </div>
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  );
}
