import $api from "../http";
import { AxiosResponse } from "axios";
import { IBatch } from "../models/batch/batch";

export default class BatchService {
  static async fetchBatchItems(id: string): Promise<AxiosResponse<IBatch[]>> {
    const response = await $api.get(`api${id}`);
    return response.data;
  }
  static async addBatchItem(url: string, data: IBatch): Promise<AxiosResponse<IBatch>> {
    const response = await $api.post(`api${url}`, {
      data,
    });
    return response.data;
  }
  /*   static async removeBatchItem(url: string, id: string): Promise<AxiosResponse<IBatch>> {
    const response = await $api.delete(`api${url}/${id}`, {
      data: id,
    });
    return response.data;
  } */
}
