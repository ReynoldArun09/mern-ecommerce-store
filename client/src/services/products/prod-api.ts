import { ProductSchemaType } from "@/schemas/product-schema";
import { AxiosError, axiosInstance } from "../axios";
import {
  FeaturedResponse,
  PaginationResponse,
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

export const GetRecommendedProductApi = async (): Promise<
  ProductResponse[]
> => {
  try {
    const response = await axiosInstance.get(`/product/recommendation`);
    return response.data.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error(error.response?.data.message);
    }
    throw error;
  }
};

export const GetAllCategoryProductsApi = async (
  category: string,
  page = 1,
  limit = 8
): Promise<PaginationResponse> => {
  try {
    const response = await axiosInstance.get(
      `/product/all-category?cat=${category}&limit=${limit}&page=${page}`
    );
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error(error.response?.data.message);
    }
    throw error;
  }
};

export const GetAllTargetAudienceProductsApi = async (
  type: string,
  page = 1,
  limit = 8
): Promise<PaginationResponse> => {
  try {
    const response = await axiosInstance.get(
      `/product/all-target?type=${type}&limit=${limit}&page=${page}`
    );
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error(error.response?.data.message);
    }
    throw error;
  }
};

export const GetAllProductApi = async (): Promise<ProductResponse[]> => {
  try {
    const response = await axiosInstance.get(`/product/all`);
    return response.data.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error(error.response?.data.message);
    }
    throw error;
  }
};

export const DeleteProductApi = async (id: string) => {
  try {
    const response = await axiosInstance.delete(`/product/delete/${id}`);
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error(error.response?.data.message);
    }
    throw error;
  }
};

export const ToggleFeatureProductApi = async (id: string) => {
  try {
    const response = await axiosInstance.put(`/product/toggle/${id}`);
    return response.data.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error(error.response?.data.message);
    }
    throw error;
  }
};

export const DisableProductApi = async (id: string) => {
  try {
    const response = await axiosInstance.put(`/product/disable/${id}`);
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error(error.response?.data.message);
    }
    throw error;
  }
};

export const CreateProductApi = async (values: ProductSchemaType) => {
  try {
    const response = await axiosInstance.post(`/product/create`, values);
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error(error.response?.data.message);
    }
    throw error;
  }
};
