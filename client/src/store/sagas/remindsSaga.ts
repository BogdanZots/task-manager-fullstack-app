import { takeLatest, call, put } from "redux-saga/effects";
import RemindsService from "../../services/RemindsService";
import {
  LOAD_REMINDS_REQUEST,
  loadRemindsError,
  loadRemindsSuccess,
  setRemindsItemSuccess,
  setRemindsItemError,
  SET_REMINDS_ITEM,
} from "../actions/remindsAction";

function* loadReminds(action: any) {
  const { id, searchField } = action.payload;
  const concatedSearchField = "&searchField=" + searchField;
  console.log("ACTION", action.payload);
  try {
    //@ts-ignore
    const response = yield call(
      RemindsService.fetchReminds,
      `/reminds?userId=${id}${searchField ? concatedSearchField : ""}`
    );
    yield put(loadRemindsSuccess(response));
  } catch (e) {
    const error: string = e === "" ? "Unknown error" : "Error is " + e;
    yield put(loadRemindsError(error));
    console.log(e);
  }
}

function* addRemind(action: any) {
  const { title, description, userId } = action.payload;
  console.log("ACTION", action.payload);
  const id = userId;
  try {
    //@ts-ignore
    const response = yield call(
      RemindsService.addRemind,
      "/reminds",
      title,
      description,
      id
    );
    yield put(setRemindsItemSuccess(response));
  } catch (e) {
    const error: string = e === "" ? "Unknown error" : "Error is " + e;
    yield put(setRemindsItemError(error));
    console.log(e);
  }
}

export default function* remindsSaga() {
  yield takeLatest(LOAD_REMINDS_REQUEST, loadReminds);
  yield takeLatest(SET_REMINDS_ITEM, addRemind);
}
