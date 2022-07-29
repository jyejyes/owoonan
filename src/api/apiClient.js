import axios from "axios";

export const apiClient = axios.create({
  baseURL: "",
});

apiClient.interceptors.request.use((config) => ({
  ...config,
  headers: {
    "X-ACCESS-TOKEN": 토큰,
  },
}));
