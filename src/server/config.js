import { getToken } from "../utils/token";
import { logout } from "../services/auth.provider";
import axios from "axios";
import { history } from "../utils/history";

const axiosInstance = axios.create({
  baseURL: "https://bookswap.azurewebsites.net",
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use(function (config) {
  const token = getToken();
  config.headers.Authorization = token ? `Bearer ${token}` : "";
  return config;
});

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async function (error) {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      if (axiosInstance.setAuthStateValue)
        axiosInstance.setAuthStateValue(null);
      history.push("/logout");
    }
    return Promise.reject(error.response.data);
  }
);

export default axiosInstance;
