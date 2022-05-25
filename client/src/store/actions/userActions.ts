import {
  ILogin,
  IRegistration,
  IRegistrationSuccess,
} from "../../interfaces/userInterface/registrationInterface";

export const USER_RERISTRATION = "USER_REGISTRATION";
export const USER_RERISTRATION_SUCCESS = "USER_REGISTRATION_SUCCESS";
export const USER_LOGIN = "USER_LOGIN";
export const USER_LOGIN_SUCCESS = "USER_LOGIN_SUCCESS";
export const USER_CHECK_AUTH = "USER_CHECK_AUTH";
export const USER_CHECK_AUTH_SUCCESS = "USER_CHECK_AUTH_SUCCESS";
export const USER_LOGOUT = "USER_LOGOUT";
export const USER_LOGOUT_SUCCESS = "USER_LOGOUT_SUCCESS";

// REGISTRATION

export interface IUserRegistationAction {
  type: typeof USER_RERISTRATION;
  payload: IRegistration;
}

export const userRegistation = (
  data: IRegistration
): IUserRegistationAction => {
  return {
    type: USER_RERISTRATION,
    payload: data,
  };
};

export interface IUserRegistrationSuccessAction {
  type: typeof USER_RERISTRATION_SUCCESS;
  payload: IRegistrationSuccess;
}

export const userRegistationSuccess = (
  data: IRegistrationSuccess
): IUserRegistrationSuccessAction => {
  return {
    type: USER_RERISTRATION_SUCCESS,
    payload: data,
  };
};

// LOGIN

export interface IUserLoginAction {
  type: typeof USER_LOGIN;
  payload: any;
}

//@ts-ignore
export const userLogin = (data: ILogin): IUserLoginAction => {
  console.log("login");
  return {
    type: USER_LOGIN,
    payload: data,
  };
};
//@ts-ignore
export interface IUserLoginSuccessAction {
  type: typeof USER_LOGIN_SUCCESS;
  payload: any;
}

export const userLoginSuccess = (data: any): IUserLoginSuccessAction => {
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
//@ts-ignore
export const userCheckAuthSuccess = (data) => {
  return {
    type: USER_CHECK_AUTH_SUCCESS,
    payload: data,
  };
};
