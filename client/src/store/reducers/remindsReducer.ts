import {
  LOAD_REMINDS_REQUEST,
  LOAD_REMINDS_SUCCESS,
  LOAD_REMINDS_ERROR,
} from "../actions/remindsAction";
import { IReminds } from "../../models/IReminds";

interface IUserStatus {
  /*   isAuth: boolean; */
  isLoading: boolean;
  remindsArray: IReminds[];
  error: string;
}

const initialState: IUserStatus = {
  /*   isAuth: false, */
  isLoading: false,
  remindsArray: [],
  error: "",
};

export default function remindsReducer(state = initialState, action: any) {
  switch (action.type) {
    case LOAD_REMINDS_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case LOAD_REMINDS_ERROR: {
      const { payload } = action;
      return {
        ...state,
        isLoading: false,
        remindsArray: [],
        error: payload,
      };
    }
    case LOAD_REMINDS_SUCCESS: {
      const { payload } = action;
      return {
        ...state,
        isLoading: false,
        remindsArray: payload,
      };
    }
    default:
      return state;
  }
}
