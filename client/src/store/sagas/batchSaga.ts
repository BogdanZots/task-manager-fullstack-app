import { compose } from "redux";
import { takeLatest, call, put, select } from "redux-saga/effects";
import { AxiosResponse } from "axios";
import {
  LOAD_BATCH_ITEMS,
  loadBatchItemsRequestSuccess,
  loadBatchRequestError,
} from "../actions/batchActions";
import { IBatch } from "../../models/batch/batch";
import BatchService from "../../services/BatchService";

export function* loadBatchItems(action: any) {
  const { id, searchField } = action.payload;
  const concatedSearchField = "&searchField=" + searchField;
  try {
    const response: AxiosResponse<Array<IBatch>> = yield call(
      BatchService.fetchBatchItems,
      `/batch?userId=${id}${searchField ? concatedSearchField : ""}`,
    );
    const { data } = response;
    yield put(loadBatchItemsRequestSuccess(data));
  } catch (e) {
    yield put(loadBatchRequestError(e as string));
  }
}

/* function* addRemind(action: any) {
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
} */

export default function* batchSaga() {
  yield takeLatest(LOAD_BATCH_ITEMS, loadBatchItems);
  /*   yield takeLatest(SET_REMINDS_ITEM, addRemind);
  yield takeLatest(REMOVE_REMIND_CARD, removeRemind); */
}
