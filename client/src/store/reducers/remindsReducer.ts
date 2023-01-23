import {
  LOAD_REMINDS_REQUEST,
  LOAD_REMINDS_SUCCESS,
  LOAD_REMINDS_ERROR,
  SET_REMINDS_SUCCESS,
  REMOVE_REMIND_CARD,
  REMOVE_REMIND_CARD_SUCCESS,
} from "../actions/remindsAction";
import { IRemind } from "../../models/reminds/IReminds";

interface IReminsReducer {
  isLoading: boolean;
  data: IRemind[];
  error: string;
}

const initialState: IReminsReducer = {
  isLoading: false,
  data: [],
  error: "",
};

export default function remindsReducer(state = initialState, action: any): IReminsReducer {
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
      const { payload } = action;
      return {
        ...state,
        isLoading: false,
        data: payload,
      };
    }
    case SET_REMINDS_SUCCESS: {
      const { payload } = action;
      return {
        ...state,
        isLoading: false,
        data: [...state.data, payload],
      };
    }
    case REMOVE_REMIND_CARD: {
      return {
        ...state,
      };
    }
    case REMOVE_REMIND_CARD_SUCCESS: {
      const { payload } = action;
      return { ...state, data: payload };
    }
    default:
      return state;
  }
}
