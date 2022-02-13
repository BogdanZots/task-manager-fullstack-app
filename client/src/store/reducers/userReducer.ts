import {
  USER_RERISTRATION_SUCCESS,
  USER_LOGIN_SUCCESS,
  USER_CHECK_AUTH_SUCCESS,
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
    role: "",
  },
};

export default function userReducer(state = initialState, action: any) {
  switch (action.type) {
    case USER_RERISTRATION_SUCCESS: {
      return {
        ...state,
        isAuth: false,
      };
    }
    case USER_LOGIN_SUCCESS: {
      const { data } = action.payload;
      return {
        ...state,
        isAuth: true,
        data: { ...data.user },
      };
    }
    case USER_CHECK_AUTH_SUCCESS: {
      const { data } = action.payload;
      return {
        ...state,
        isAuth: data.isAuthorized,
        data: { ...data.user },
      };
    }
    case USER_LOGOUT_SUCCESS: {
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
