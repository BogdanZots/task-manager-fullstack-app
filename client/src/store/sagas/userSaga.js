import { takeLatest, call, put } from "redux-saga/effects";
import AuthService from "../../services/AuthService";
import {
  USER_RERISTRATION,
  USER_LOGIN,
  USER_CHECK_AUTH,
  USER_LOGOUT,
  userRegistationSuccess,
  userLoginSuccess,
  userCheckAuthSuccess,
  userLogoutSuccess,
} from "../actions/userActions";

function* userRegistation(action) {
  const { email, password, name, surname, role } = action.payload;
  try {
    const response = yield call(
      AuthService.registration,
      email,
      password,
      name,
      surname,
      role
    );
    if (response?.data) {
      let accessToken = response.data.accessToken;
      localStorage.setItem("token", accessToken);
      yield put(userRegistationSuccess(response.data));
    }
  } catch (e) {
    console.log(e);
  }
}

function* userLogin(action) {
  const { email, password } = action.payload;
  try {
    const response = yield call(AuthService.login, email, password);
    localStorage.setItem("token", response.data.accessToken);
    yield put(userLoginSuccess(response.data));
  } catch (e) {
    console.log(action, e);
  }
}
export function* userCheckAuth() {
  try {
    const response = yield call(AuthService.checkAuth);
    localStorage.setItem("token", response.data.accessToken);
    yield put(userCheckAuthSuccess(response));
  } catch (e) {
    console.log(e);
  }
}
function* userLogout() {
  try {
    yield call(AuthService.loguot);
    localStorage.removeItem("token");
    yield put(userLogoutSuccess());
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
