import axiosInstance from "./config";

export const fetcher = (url) => axiosInstance.get(url).then((res) => res.data);

export const post = (url, data, options) =>
  axiosInstance.post(url, data, options).then((res) => res.data);

export const put = (url, data, options) =>
  axiosInstance.put(url, data, options).then((res) => res.data);

export const remove = (url, data) =>
  axiosInstance.delete(url, data).then((res) => res.data);
