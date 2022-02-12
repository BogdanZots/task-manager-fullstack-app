import $api from "../http";
import { AxiosResponse } from "axios";
import { IReminds } from "../models/IReminds";
export default class RemindsService {
  static async fetchReminds(): Promise<AxiosResponse<IReminds[]>> {
    return $api.get<IReminds[]>("/api/reminds");
  }
}
