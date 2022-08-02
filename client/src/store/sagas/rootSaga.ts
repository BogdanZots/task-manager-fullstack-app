import remindsSaga from "./remindsSaga";
import userSaga from "./userSaga";
import { initApp } from "./initApp";
import { fork, call, all } from "redux-saga/effects";

export function* rootSaga() {
  yield all([call(initApp), call(remindsSaga), call(userSaga)]);
}
