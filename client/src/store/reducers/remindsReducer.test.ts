const initialState = {
  isLoading: false,
  data: [
    {
      description: "",
      id: "",
      title: "",
      __v: 0,
      _id: "",
    },
  ],
  error: "",
};
import { setRemindsItemSuccess } from "../actions/remindsAction";
import reducer from "./remindsReducer";

describe("reminds reducer test", () => {
  it("should add new reminds", () => {
    const newRemind = {
      id: "string",
      description: "string",
      title: "string",
      __v: 0,
      _id: "string",
    };
    const action = setRemindsItemSuccess(newRemind);
    const newState = reducer(initialState, action);
    expect(newState.data.length).toBe(2);
  });
});

export {};
