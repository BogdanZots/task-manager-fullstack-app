import {
  LOAD_REMINDS_REQUEST,
  LOAD_REMINDS_SUCCESS,
  LOAD_REMINDS_ERROR,
} from "../actions/remindsAction";
import { IReminds } from "../../models/IReminds";

interface IReminsReducer {
  isLoading: boolean;
  data: IReminds[];
  error: string;
}

const initialState: IReminsReducer = {
  isLoading: false,
  data: [],
  error: "",
};

export default function remindsReducer(
  state = initialState,
  action: any
): IReminsReducer {
  switch (action.type) {
    case LOAD_REMINDS_REQUEST: {
      console.log("A", action);
      return {
        ...state,
        isLoading: true,
      };
    }
    case LOAD_REMINDS_ERROR: {
      const { payload } = action;
      console.log("A E", action);
      return {
        ...state,
        isLoading: false,
        data: [],
        error: payload,
      };
    }
    case LOAD_REMINDS_SUCCESS: {
      console.log("A S", action);
      const { data } = action.payload;
      return {
        ...state,
        isLoading: false,
        data: data.remindData,
      };
    }
    default:
      return state;
  }
}
