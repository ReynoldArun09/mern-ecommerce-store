import { AxiosError, axiosInstance } from "../axios";
import {
  FeaturedResponse,
  ProductcountResponse,
  ProductResponse,
} from "../types";

export const GetFeaturedProductsApi = async (): Promise<FeaturedResponse[]> => {
  try {
    const response = await axiosInstance.get("/product/featured");
    return response.data.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error(error.response?.data.message);
    }
    throw error;
  }
};

export const GetPopularCategoryAndCountApi = async (): Promise<
  ProductcountResponse[]
> => {
  try {
    const response = await axiosInstance.get("/product/category-count");
    return response.data.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error(error.response?.data.message);
    }
    throw error;
  }
};

export const GetSingleProductApi = async (
  productId: string
): Promise<ProductResponse> => {
  try {
    const response = await axiosInstance.get(
      `/product/single-product/${productId}`
    );
    return response.data.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error(error.response?.data.message);
    }
    throw error;
  }
};
