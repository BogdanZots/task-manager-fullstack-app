export const USER_RERISTRATION = "USER_REGISTRATION";
export const USER_RERISTRATION_SUCCESS = "USER_REGISTRATION_SUCCESS";
export const USER_LOGIN = "USER_LOGIN";
export const USER_LOGIN_SUCCESS = "USER_LOGIN_SUCCESS";
export const USER_CHECK_AUTH = "USER_CHECK_AUTH";
export const USER_CHECK_AUTH_SUCCESS = "USER_CHECK_AUTH_SUCCESS";
export const USER_LOGOUT = "USER_LOGOUT";
export const USER_LOGOUT_SUCCESS = "USER_LOGOUT_SUCCESS";

export const userRegistation = (data) => {
  return {
    type: USER_RERISTRATION,
    payload: data,
  };
};

export const userRegistationSuccess = (data) => {
  console.log("action data", data);
  return {
    type: USER_RERISTRATION_SUCCESS,
    payload: data,
  };
};
export const userLogin = (data) => {
  return {
    type: USER_LOGIN,
    payload: data,
  };
};

export const userLoginSuccess = (data) => {
  return {
    type: USER_LOGIN_SUCCESS,
    payload: { isAuth: true, data },
  };
};
export const userLogout = () => {
  return {
    type: USER_LOGOUT,
  };
};
export const userLogoutSuccess = () => {
  return {
    type: USER_LOGOUT_SUCCESS,
  };
};
export const userCheckAuth = () => {
  return {
    type: USER_CHECK_AUTH,
    payload: { isAuth: true },
  };
};

export const userCheckAuthSuccess = (data) => {
  return {
    type: USER_CHECK_AUTH_SUCCESS,
    payload: data,
  };
};
