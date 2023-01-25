import $api from "../http";
import { AxiosResponse } from "axios";
import { IRemind } from "../models/reminds/IReminds";

export default class RemindsService {
  static async fetchReminds(id: string): Promise<AxiosResponse<IRemind[]>> {
    const response = await $api.get(`api${id}`, {
      headers: {
        pragma: "test",
      },
    });
    return response.data;
  }
  static async addRemind(
    url: string,
    title: string,
    description: string,
    id: string,
  ): Promise<AxiosResponse<IRemind>> {
    const response = await $api.post(`api${url}`, {
      title,
      description,
      id,
    });
    return response.data;
  }
  static async removeRemind(url: string, id: string): Promise<AxiosResponse<IRemind>> {
    const response = await $api.delete(`api${url}/${id}`, {
      data: id,
    });
    return response.data;
  }
}
