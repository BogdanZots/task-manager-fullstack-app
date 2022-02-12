import axios, { AxiosRequestConfig } from "axios";
import { config } from "process";
import { IAuthResponse } from "../models/response/AuthResponse";

export const API_URL = "http://localhost:5000";

const $api = axios.create({
  withCredentials: true,
  baseURL: API_URL,
});

$api.interceptors.request.use((config: AxiosRequestConfig) => { // создаём ф-ю перехватчик на 401 статус
  if (config && config.headers) {
    config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
  }
  return config;
});
$api.interceptors.response.use(
  (config) => {
    return config;
  },
  async (error) => {
    let isFirst = true;
    const originalRequest = error.config;
    if (error.response.status === 401 && isFirst) {
      isFirst = false;
      const response = await axios.get<IAuthResponse>(`${API_URL}/api/refresh`, {
        withCredentials: true,
      });
      localStorage.setItem("token", response.data.accessToken);
      return $api.request(originalRequest); 
    }
  }
);

export default $api;
