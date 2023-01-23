import { getUser } from "./userSelector";
import { mockUserData } from "./mockData";
describe("redux user selector", () => {
  it("should select user from state object", () => {
    const result = getUser(mockUserData);
    expect(result).toEqual(mockUserData.user);
  });
});

export {};
