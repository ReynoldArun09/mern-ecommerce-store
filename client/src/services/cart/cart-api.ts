import { AxiosError, axiosInstance } from "../axios";
import { CartResponse } from "../types";

export const GetCartProductsApi = async (): Promise<CartResponse[]> => {
  try {
    const response = await axiosInstance.get("/cart/get-cart");
    return response.data.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error(error.response?.data.message);
    }
    throw error;
  }
};

export const AddToCartProductApi = async (productId: string) => {
  try {
    const response = await axiosInstance.post(`/cart/add-to-cart/${productId}`);
    return response.data.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error(error.response?.data.message);
    }
    throw error;
  }
};

export const RemoveFromCartApi = async (productId: string) => {
  try {
    const response = await axiosInstance.post(`/cart/remove-cart`, {
      productId,
    });
    return response.data.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error(error.response?.data.message);
    }
    throw error;
  }
};

export const UpdateQuantityApi = async (
  productId: string,
  quantity: number
) => {
  try {
    const response = await axiosInstance.post(`/cart/quantity/${productId}`, {
      quantity,
    });
    return response.data.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error(error.response?.data.message);
    }
    throw error;
  }
};
