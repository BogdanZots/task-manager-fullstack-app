import axios from "axios";
import { takeLatest, call, put } from "redux-saga/effects";
import { API_URL } from "../../http";
import RemindsService from "../../services/RemindsService";
import AuthService from "../../services/RemindsService";
import {
  LOAD_REMINDS_REQUEST,
  LOAD_REMINDS_SUCCESS,
  LOAD_REMINDS_ERROR,
  loadRemindsError,
  loadRemindsRequest,
  loadRemindsSuccess,
  setRemindsItemRequest,
  setRemindsItemSuccess,
  setRemindsItemError,
  SET_REMINDS_ITEM,
} from "../actions/remindsAction";
import UserService from "../../services/UserService";

function* loadReminds() {
  try {
    //@ts-ignore
    const response = yield call(RemindsService.fetchReminds);
    yield put(loadRemindsRequest());
    yield put(loadRemindsSuccess(response));
  } catch (e) {
    const error: string = e === "" ? "Unknown error" : "Error is " + e;
    yield put(loadRemindsError(error));
    console.log(e);
  }
}

function* addRemind(action: any) {
  const { title, description } = action.payload;
  console.log("data", title);
  try {
    //@ts-ignore
    const response = yield call(UserService.addItems,'/reminds' ,title, description);
    /*  yield put(setRemindsItemRequest({title,description})); */
    yield put(setRemindsItemSuccess(response));
  } catch (e) {
    const error: string = e === "" ? "Unknown error" : "Error is " + e;
    yield put(setRemindsItemError(error));
    console.log(e);
  }
}

export default function* remindsSaga() {
  /*   yield takeLatest(LOAD_REMINDS_REQUEST, loadReminds); */
  yield takeLatest(SET_REMINDS_ITEM, addRemind);
}
