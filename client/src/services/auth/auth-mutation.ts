import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { SignInApi, SignOutApi, SignUpApi } from "./auth-api";
import { useNavigate } from "react-router-dom";
import { useSyncCartWithLocalStorageMutation } from "../cart/cart-mutation";
import { useCart } from "@/hooks/useCart";

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
  const { mutate: syncCart } = useSyncCartWithLocalStorageMutation();
  const { LocalStorage } = useCart();
  return useMutation({
    mutationKey: ["signIn"],
    mutationFn: SignInApi,
    onSuccess: async (data) => {
      await queryClient.invalidateQueries({
        queryKey: ["verify-auth"],
      });
      toast.success(data?.message);
      if (LocalStorage && Object.keys(LocalStorage).length > 0) {
        syncCart(LocalStorage);
      }
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
