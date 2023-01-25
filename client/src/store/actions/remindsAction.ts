import { strict } from "assert";
import { IRemind } from "../../models/reminds/IReminds";

export const LOAD_REMINDS_REQUEST = "LOAD_REMINDS_REQUEST";
export const LOAD_REMINDS_SUCCESS = "LOAD_REMINDS_SUCCESS";
export const LOAD_REMINDS_ERROR = "LOAD_REMINDS_ERROR";
export const SET_REMINDS_ITEM = "SET_REMINDS_ITEM";
export const SET_REMINDS_SUCCESS = "SET_REMINDS_SUCCESS";
export const SET_REMINDS_ERROR = "SET_REMINDS_ERROR";
export const REMOVE_REMIND_CARD = "REMOVE_REMIND_CARD";
export const REMOVE_REMIND_CARD_SUCCESS = "REMOVE_REMIND_SUCCESS";
export const REMOVE_REMIND_CARD_ERROR = "REMOVE_REMIND_ERROR";

// LOAD
export interface IloadRemindsRequestAction {
  type: typeof LOAD_REMINDS_REQUEST;
  payload: any;
}
export const loadRemindsRequest = (
  id: string,
  searchField?: string,
): IloadRemindsRequestAction => ({
  type: LOAD_REMINDS_REQUEST,
  payload: { id, searchField },
});

export interface IloadRemindsSuccess {
  type: typeof LOAD_REMINDS_SUCCESS;
  payload: IRemind[];
}

export const loadRemindsSuccess = (data: any[]): IloadRemindsSuccess => ({
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
  return {
    type: SET_REMINDS_ITEM,
    payload: data,
  };
};

export interface ISetRemindsItemSuccess {
  type: typeof SET_REMINDS_SUCCESS;
  payload: IRemind;
}

export const setRemindsItemSuccess = (data: IRemind): ISetRemindsItemSuccess => ({
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

export interface IRemoveRemindCard {
  type: typeof REMOVE_REMIND_CARD;
  payload: string;
}

export const removeRemindCard = (id: string): IRemoveRemindCard => ({
  type: REMOVE_REMIND_CARD,
  payload: id,
});

export interface IRemoveRemindCardSuccess {
  type: typeof REMOVE_REMIND_CARD_SUCCESS;
  payload: Array<IRemind>;
}

export const removeRemindCardSuccess = (reminds: Array<IRemind>): IRemoveRemindCardSuccess => ({
  type: REMOVE_REMIND_CARD_SUCCESS,
  payload: reminds,
});

export interface IRemoveRemindCardError {
  type: typeof REMOVE_REMIND_CARD_ERROR;
  payload: string;
}

export const removeRemindCardError = (error: string): IRemoveRemindCardError => ({
  type: REMOVE_REMIND_CARD_ERROR,
  payload: error,
});
