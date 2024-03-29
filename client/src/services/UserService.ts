import $api from "../http";
import { AxiosResponse } from "axios";
import { IUser } from "../models/user/IUser";
export default class UserService {
  static async fetchUsers(): Promise<AxiosResponse<IUser[]>> {
    return $api.get<IUser[]>("/api/users");
  }
  static async fetchItems(url: string) {
    return $api.get(`/api/${url}`);
  }
}
