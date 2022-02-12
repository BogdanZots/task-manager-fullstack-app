import remindsSaga from "./remindsSaga";
import userSaga from "./userSaga";
import { fork, call, all } from "redux-saga/effects";

export function* rootSaga() {
  yield all([
    remindsSaga(), // saga1 can also yield [ fork(actionOne), fork(actionTwo) ]
    userSaga(),
  ]);
}
