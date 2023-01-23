import { compose } from "redux";
import { takeLatest, call, put, select } from "redux-saga/effects";
import RemindsService from "../../services/RemindsService";
import {
  LOAD_REMINDS_REQUEST,
  loadRemindsError,
  loadRemindsSuccess,
  setRemindsItemSuccess,
  setRemindsItemError,
  SET_REMINDS_ITEM,
  REMOVE_REMIND_CARD,
  IRemoveRemindCard,
  removeRemindCardSuccess,
} from "../actions/remindsAction";
import { AxiosResponse } from "axios";
import { IRemind } from "../../models/reminds/IReminds";
import { updatedReminds } from "./helpers/updatedReminds";
import { reduxStoreConfig } from "../../config/config";

export function* loadReminds(action: any) {
  const { id, searchField } = action.payload;
  const concatedSearchField = "&searchField=" + searchField;
  try {
    const response: AxiosResponse<Array<IRemind>> = yield call(
      RemindsService.fetchReminds,
      `/reminds?userId=${id}${searchField ? concatedSearchField : ""}`,
    );
    const { data } = response;
    yield put(loadRemindsSuccess(data));
  } catch (e) {
    yield put(loadRemindsError(e as string));
  }
}

function* addRemind(action: any) {
  const { title, description, id } = action.payload;
  try {
    const response: AxiosResponse<IRemind> = yield call(
      RemindsService.addRemind,
      "/reminds",
      title,
      description,
      id,
    );
    const { data } = response;
    yield put(setRemindsItemSuccess(data));
  } catch (e) {
    const error: string = e === "" ? "Unknown error" : "Error is " + e;
    yield put(setRemindsItemError(error));
  }
}

function* removeRemind(action: IRemoveRemindCard) {
  const id = action.payload;
  try {
    const res: AxiosResponse<IRemind> = yield call(RemindsService.removeRemind, "/reminds", id);
    const { data: deletedRemind } = res;
    //@ts-ignore
    const remindsState: any = yield select(state => state[reduxStoreConfig.reminds]);
    const updatedData = updatedReminds("delete", remindsState.data, deletedRemind);
    yield put(removeRemindCardSuccess(updatedData));
  } catch {}
}

export default function* remindsSaga() {
  yield takeLatest(LOAD_REMINDS_REQUEST, loadReminds);
  yield takeLatest(SET_REMINDS_ITEM, addRemind);
  yield takeLatest(REMOVE_REMIND_CARD, removeRemind);
}
