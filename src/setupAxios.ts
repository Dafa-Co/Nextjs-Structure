// @ts-ignore
import Cookies from "js-cookie";

import axios, { AxiosInstance } from "axios";

const isServer = typeof window === "undefined";

export default function setupAxios(): AxiosInstance {
  const token = Cookies.get("token");

  const lang = Cookies.get("lang") || "en";

  const appClient = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASE_URL,
    headers: {
      Authorization: `Bearer ${token ?? ""}`,
      Accept: "application/json",
      ContentType: "application/json",
      "Accept-Language": "en",
      "Content-Language": "en",
    },
  });

  appClient.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      // if the user unauthenticated
      if (error.response?.status === 401) {
        Cookies.remove("token");
        Cookies.remove("user");
        if (!isServer) {
          const path = window.location.pathname;
          if (typeof window && !path.includes("auth")) {
            window.location.reload();
          }
        }
      }
      return Promise.reject(error);
    },
  );

  return appClient;
}
