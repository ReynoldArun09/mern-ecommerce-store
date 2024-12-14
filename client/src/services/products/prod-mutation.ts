import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  CreateProductApi,
  DeleteProductApi,
  DisableProductApi,
  ToggleFeatureProductApi,
} from "./prod-api";
import { toast } from "sonner";

export function useDeleteProductMutation() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["delete-product"],
    mutationFn: DeleteProductApi,
    onSuccess: async (data) => {
      toast.success(data?.message);
      await queryClient.invalidateQueries({ queryKey: ["all-product-list"] });
    },
  });
}

export function useToggleFeatureMutation() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["toggle-feature"],
    mutationFn: ToggleFeatureProductApi,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["all-product-list"] });
    },
  });
}

export function useDisableProductMutation() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["disable-product"],
    mutationFn: DisableProductApi,
    onSuccess: async (data) => {
      toast.success(data?.message);
      await queryClient.invalidateQueries({ queryKey: ["all-product-list"] });
    },
  });
}

export function useCreateProductMutation() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["create-product"],
    mutationFn: CreateProductApi,
    onSuccess: async (data) => {
      toast.success(data?.message);
      await queryClient.invalidateQueries({ queryKey: ["all-product-list"] });
    },
  });
}
