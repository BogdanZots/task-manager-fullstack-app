import $api from "../http";
import { AxiosResponse } from "axios";
import { IReminds } from "../models/reminds/IReminds";
export default class RemindsService {
  static async fetchReminds(id: string): Promise<AxiosResponse<IReminds[]>> {
    return $api.get<IReminds[]>(`api${id}`, {
      headers: {
        pragma: "test",
      },
    });
  }
  static async addRemind(url: string, title: string, description: string, id: string) {
    return $api.post(`api${url}`, {
      title,
      description,
      id,
    });
  }
}
