import remindsSaga from "./remindsSaga";
import userSaga from "./userSaga";
import { initApp } from "./initApp";
import { fork, call, all } from "redux-saga/effects";
import batchSaga from "./batchSaga";

export function* rootSaga() {
  yield all([call(initApp), call(remindsSaga), call(userSaga), call(batchSaga)]);
}
