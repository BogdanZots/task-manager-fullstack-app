import { userCheckAuth } from "./userSaga";
import { call } from "redux-saga/effects";

export function* initApp() {
  //there will be more saga's for init our app
  yield call(userCheckAuth);
}
