import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  AddToCartProductApi,
  RemoveFromCartApi,
  UpdateQuantityApi,
} from "./cart-api";

export function useAddToCartMutation() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["add-to-cart"],
    mutationFn: AddToCartProductApi,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cart-products"] });
    },
  });
}

export function useRemoveFromCartMutation() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["remove-from-cart"],
    mutationFn: RemoveFromCartApi,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cart-products"] });
    },
  });
}

export function useUpdateQuantityMutation() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["update-quantity"],
    mutationFn: ({
      productId,
      quantity,
    }: {
      productId: string;
      quantity: number;
    }) => UpdateQuantityApi(productId, quantity),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cart-products"] });
    },
  });
}
