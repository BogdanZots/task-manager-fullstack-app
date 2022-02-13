import $api from "../http";
import { AxiosResponse } from "axios";
import { IReminds } from "../models/IReminds";
export default class RemindsService {
  static async fetchReminds(id: string): Promise<AxiosResponse<IReminds[]>> {
    return $api.get<IReminds[]>(`api${id}`);
  }
  static async addRemind(
    url: string,
    title: string,
    description: string,
    id: string
  ) {
    console.log({ url, title, description, id });
    return $api.post(`api${url}`, {
      title,
      description,
      id,
    });
  }
}
