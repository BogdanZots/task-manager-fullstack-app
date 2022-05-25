import $api from "../http";
import { AxiosResponse } from "axios";
import { IAuthResponse } from "../models/response/AuthResponse";
import {
  CHECK_AUTH_URL,
  LOGOUT_URL,
  LOGIN_URL,
  REGISTRATION_URL,
  API_URL,
} from "../const/consts";
export default class AuthService {
  static async login(
    email: string,
    password: string
  ): Promise<AxiosResponse<IAuthResponse>> {
    console.log("login");
    return $api.post<IAuthResponse>(`${API_URL}${LOGIN_URL}`, {
      email,
      password,
    });
  }
  static async registration(
    email: string,
    password: string,
    name: string,
    surname: string,
    role: string
  ): Promise<AxiosResponse<IAuthResponse>> {
    return $api.post<IAuthResponse>(`${API_URL}${REGISTRATION_URL}`, {
      email,
      password,
      name,
      surname,
      role,
    });
  }
  static async loguot(email: string, password: string): Promise<void> {
    return $api.post(`${API_URL}${LOGOUT_URL}`);
  }
  static async checkAuth(): Promise<void> {
    return $api.get(`${API_URL}${CHECK_AUTH_URL}`);
  }
}
