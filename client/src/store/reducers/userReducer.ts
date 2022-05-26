import {
  USER_RERISTRATION_SUCCESS,
  USER_LOGIN_SUCCESS,
  USER_CHECK_AUTH_SUCCESS,
  USER_LOGOUT_SUCCESS,
  USER_LOGIN,
} from "../actions/userActions";
import { IUser } from "../../models/IUser";
import { redirect } from "../../helpres/redirect";

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
  console.log("REDUCER");
  switch (action.type) {
    case USER_RERISTRATION_SUCCESS: {
      console.log(action);
      return {
        ...state,
        isAuth: false,
      };
    }
    case USER_LOGIN_SUCCESS: {
      console.log(action);
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
        isAuth: true,
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
