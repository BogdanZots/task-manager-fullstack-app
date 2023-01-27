import { IBatch } from "../../models/batch/batch";

export const LOAD_BATCH_ITEMS = "LOAD_BATCH_ITEMS";
export const LOAD_BATCH_ITEMS_ERROR = "LOAD_BATCH_ITEMS_ERROR";
export const LOAD_BATCH_ITEMS_SUCCESS = "LOAD_BATCH_ITEMS_SUCCESS";
export const ADD_BATCH_ITEM = "FETCH_BATCH_ITEM";
export const ADD_BATCH_ITEM_ERROR = "FETCH_BATCH_ITEM_ERROR";
export const ADD_BATCH_ITEM_SUCCESS = "FETCH_BATCH_ITEM_SUCCESS";
export const REMOVE_BATCH_ITEM = "REMOVE_BATCH_ITEM";
export const REMOVE_BATCH_ITEM_ERROR = "REMOVE_BATCH_ITEM_ERROR";
export const REMOVE_BATCH_ITEM_SUCCESS = "REMOVE_BATCH_ITEM_SUCCESS";

//LOAD

export interface IloadBatchItemsRequest {
  type: typeof LOAD_BATCH_ITEMS;
  payload: string;
}
export const loadBatchItemsRequest = (userId: string): IloadBatchItemsRequest => ({
  type: LOAD_BATCH_ITEMS,
  payload: userId,
});
export interface IloadBatchItemsRequestSuccess {
  type: typeof LOAD_BATCH_ITEMS_SUCCESS;
  payload: IBatch[];
}
export const loadBatchItemsRequestSuccess = (data: IBatch[]): IloadBatchItemsRequestSuccess => ({
  type: LOAD_BATCH_ITEMS_SUCCESS,
  payload: data,
});
export interface IloadBatchItemsRequestError {
  type: typeof LOAD_BATCH_ITEMS_ERROR;
  payload: string;
}
export const loadBatchRequestError = (errorMessage: string): IloadBatchItemsRequestError => ({
  type: LOAD_BATCH_ITEMS_ERROR,
  payload: errorMessage,
});

//ADD

export interface IAddBatchItemRequest {
  type: typeof ADD_BATCH_ITEM;
  payload: string;
}
export const addBatchRequest = (userId: string): IAddBatchItemRequest => ({
  type: ADD_BATCH_ITEM,
  payload: userId,
});
export interface IAddBatchItemRequestSuccess {
  type: typeof ADD_BATCH_ITEM_SUCCESS;
  payload: IBatch;
}
export const addBatchRequestSuccess = (item: IBatch): IAddBatchItemRequestSuccess => ({
  type: ADD_BATCH_ITEM_SUCCESS,
  payload: item,
});
export interface IAddBatchItemError {
  type: typeof ADD_BATCH_ITEM_ERROR;
  payload: string;
}
export const addBatchItemError = (errorMessage: string): IAddBatchItemError => ({
  type: ADD_BATCH_ITEM_ERROR,
  payload: errorMessage,
});

//REMOVE

export interface IRemoveBatchItemRequest {
  type: typeof REMOVE_BATCH_ITEM;
  payload: { userId: string; itemId: string };
}

export const removeBatchItemRequest = (
  userId: string,
  itemId: string,
): IRemoveBatchItemRequest => ({
  type: REMOVE_BATCH_ITEM,
  payload: { userId, itemId },
});
