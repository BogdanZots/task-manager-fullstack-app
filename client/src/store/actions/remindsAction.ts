import { IReminds } from "../../models/IReminds";

export const LOAD_REMINDS_REQUEST = "LOAD_REMINDS_REQUEST";
export const LOAD_REMINDS_SUCCESS = "LOAD_REMINDS_SUCCESS";
export const LOAD_REMINDS_ERROR = "LOAD_REMINDS_ERROR";
export const SET_REMINDS_ITEM = "SET_REMINDS_ITEM";
export const SET_REMINDS_SUCCESS = "SET_REMINDS_SUCCESS";
export const SET_REMINDS_ERROR = "SET_REMINDS_ERROR";

// LOAD
export interface IloadRemindsRequestAction {
  type: typeof LOAD_REMINDS_REQUEST;
  payload: boolean;
}
export const loadRemindsRequest = (): IloadRemindsRequestAction => ({
  type: LOAD_REMINDS_REQUEST,
  payload: true,
});

export interface IloadRemindsSuccess {
  type: typeof LOAD_REMINDS_SUCCESS;
  payload: IReminds[];
}

export const loadRemindsSuccess = (data: IReminds[]): IloadRemindsSuccess => ({
  type: LOAD_REMINDS_SUCCESS,
  payload: data,
});

export interface IloadRemindsError {
  type: typeof LOAD_REMINDS_ERROR;
  payload: string;
}

export const loadRemindsError = (error: string): IloadRemindsError => ({
  type: LOAD_REMINDS_ERROR,
  payload: error,
});

// SET

export interface ISetRemindsItemAction {
  type: typeof SET_REMINDS_ITEM;
  payload: any;
}
export const setRemindsItemRequest = (data: any): ISetRemindsItemAction => {
  console.log("HI");
  return {
    type: SET_REMINDS_ITEM,
    payload: data,
  };
};

export interface ISetRemindsItemSuccess {
  type: typeof SET_REMINDS_SUCCESS;
  payload: IReminds[];
}

export const setRemindsItemSuccess = (
  data: IReminds[]
): ISetRemindsItemSuccess => ({
  type: SET_REMINDS_SUCCESS,
  payload: data,
});

export interface ISetRemindsItemError {
  type: typeof SET_REMINDS_ERROR;
  payload: string;
}

export const setRemindsItemError = (error: string): ISetRemindsItemError => ({
  type: SET_REMINDS_ERROR,
  payload: error,
});
