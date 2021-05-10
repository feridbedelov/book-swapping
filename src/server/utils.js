import axiosInstance from "./config";

export const fetcher = (url) => axiosInstance.get(url).then((res) => res.data);

export const post = (url, data) =>
  axiosInstance.post(url, data).then((res) => res.data);

export const put = (url, data) =>
  axiosInstance.put(url, data).then((res) => res.data);

export const remove = (url, data) =>
  axiosInstance.delete(url, data).then((res) => res.data);
