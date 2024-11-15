import axios, { AxiosError } from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_ENV,
  withCredentials: true,
});

export { axiosInstance, AxiosError };
