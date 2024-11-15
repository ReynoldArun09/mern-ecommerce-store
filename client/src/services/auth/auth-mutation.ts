import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { SignInApi, SignOutApi, SignUpApi } from "./auth-api";
import { useNavigate } from "react-router-dom";

export function useSignUp() {
  const navigate = useNavigate();
  return useMutation({
    mutationKey: ["signUp"],
    mutationFn: SignUpApi,
    onSuccess: (data) => {
      toast.success(data?.message);
      navigate("/auth/sign-in");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
}

export function useSignIn() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["signIn"],
    mutationFn: SignInApi,
    onSuccess: (data) => {
      queryClient.invalidateQueries({
        queryKey: ["verify-auth"],
      });
      toast.success(data?.message);
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
}

export function useSignOut() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["signOut"],
    mutationFn: SignOutApi,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["verify-auth"],
      });
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
}
