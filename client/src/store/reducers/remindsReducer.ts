import {
  LOAD_REMINDS_REQUEST,
  LOAD_REMINDS_SUCCESS,
  LOAD_REMINDS_ERROR,
  SET_REMINDS_SUCCESS,
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
        data: [],
        error: payload,
      };
    }
    case LOAD_REMINDS_SUCCESS: {
      const { data } = action.payload;
      return {
        ...state,
        isLoading: false,
        data: data.remindData,
      };
    }
    case SET_REMINDS_SUCCESS: {
      const dataCopy = [...state.data];
      dataCopy.push(action.payload.data.remindData);
      console.log(dataCopy);
      return {
        ...state,
        isLoading: false,
        data: dataCopy,
      };
    }
    default:
      return state;
  }
}
