import { SigninSchemaType, SignupSchemaType } from "@/schemas/auth-schema";
import { AxiosError, axiosInstance } from "../axios";

export const VerifyAuthApi = async () => {
  try {
    const response = await axiosInstance.get("/auth/verify");
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      if (error.response?.status === 401) return null;
      throw new Error(error.response?.data.message);
    }
    throw error;
  }
};

export const SignUpApi = async (values: SignupSchemaType) => {
  try {
    const response = await axiosInstance.post("/auth/signup", values);
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error(error.response?.data.message);
    }
    throw error;
  }
};

export const SignInApi = async (values: SigninSchemaType) => {
  try {
    const response = await axiosInstance.post("/auth/signin", values);
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error(error.response?.data.message);
    }
    throw error;
  }
};

export const SignOutApi = async () => {
  try {
    const response = await axiosInstance.post("/auth/signout");
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error(error.response?.data.message);
    }
    throw error;
  }
};
