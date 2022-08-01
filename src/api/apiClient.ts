import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

export function apiAxios() {
  const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
  });
  return setInterceptors(axiosInstance);
}
function setInterceptors(axiosInstance: AxiosInstance) {
  const token = localStorage.getItem("token");
  axiosInstance.interceptors.request.use(
    (config: AxiosRequestConfig) => {
      config.headers = { Authorization: `Bearer ${token}` };
      return config;
    },
    (error: Error) => {
      return Promise.reject(error);
    }
  );
  return axiosInstance;
}

export function getUser() {
  return apiAxios().get("/api/v1/users");
}
