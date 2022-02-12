import axios from "axios";
import { takeLatest, call, put } from "redux-saga/effects";
import { API_URL } from "../../http";
import AuthService from "../../services/AuthService";
import {
  USER_RERISTRATION,
  USER_RERISTRATION_SUCCESS,
  USER_LOGIN_SUCCESS,
  USER_LOGIN,
  USER_CHECK_AUTH,
  USER_CHECK_AUTH_SUCCESS,
  USER_LOGOUT,
  USER_LOGOUT_SUCCESS,
} from "../actions/userActions";

function* userRegistation(action) {
  const { email, password, name, surname, role } = action.payload;
  console.log("data", action.payload);
  try {
    const response = yield call(
      AuthService.registration,
      email,
      password,
      name,
      surname,
      role
    );
    localStorage.setItem("token", response.data.accessToken);
    yield put({ type: USER_RERISTRATION_SUCCESS });
  } catch (e) {
    console.log(action, e);
  }
}
function* userLogin(action) {
  const { email, password } = action.payload;
  try {
    const response = yield call(AuthService.login, email, password);
    console.log(response);
    localStorage.setItem("token", response.data.accessToken);
    yield put({ type: USER_LOGIN_SUCCESS, data: response.data });
  } catch (e) {
    console.log(action, e);
  }
}
function* userCheckAuth(action) {
  try {
    const response = yield call(AuthService.checkAuth);
    console.log(response);
    localStorage.setItem("token", response.data.accessToken);
    yield put({ type: USER_CHECK_AUTH_SUCCESS, data: response });
  } catch (e) {
    console.log(action, e);
  }
}
function* userLogout() {
  try {
    yield call(AuthService.loguot);
    localStorage.removeItem("token");
    yield put({ type: USER_LOGOUT_SUCCESS });
  } catch (e) {
    console.log(e);
  }
}

export default function* userSaga() {
  yield takeLatest(USER_RERISTRATION, userRegistation);
  yield takeLatest(USER_LOGOUT, userLogout);
  yield takeLatest(USER_LOGIN, userLogin);
  yield takeLatest(USER_CHECK_AUTH, userCheckAuth);
}
