import {
  USER_RERISTRATION,
  USER_RERISTRATION_SUCCESS,
  USER_LOGIN_SUCCESS,
  USER_CHECK_AUTH_SUCCESS,
  USER_LOGOUT,
  USER_LOGOUT_SUCCESS,
} from "../actions/userActions";
import { IUser } from "../../models/IUser";

interface IUserStatus {
  isAuth: boolean;
  data: IUser;
}

const initialState: IUserStatus = {
  isAuth: false,
  data: {
    email: "",
    id: "",
    isActivated: false,
    name: "",
    surname: "",
  },
};

export default function userReducer(state = initialState, action: any) {
  switch (action.type) {
    case USER_RERISTRATION_SUCCESS: {
      const { data } = action;
      console.log("data", data.data.user);
      return {
        ...state,
        isAuth: true,
        data: { ...data.data.user },
      };
    }
    case USER_LOGIN_SUCCESS: {
      const { data } = action;
      console.log("data", data);
      return {
        ...state,
        isAuth: true,
        data: { ...data.user },
      };
    }
    case USER_CHECK_AUTH_SUCCESS: {
      const { data } = action;
      console.log("data", action);
      return {
        ...state,
        isAuth: true,
        data: { ...data.data.user },
      };
    }
    case USER_LOGOUT_SUCCESS: {
      console.log(action);
      return {
        ...state,
        isAuth: false,
        data: {},
      };
    }
    default:
      return state;
  }
}
