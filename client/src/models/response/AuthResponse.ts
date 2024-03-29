import { IUser } from "../user/IUser";

export interface IAuthResponse {
  refreshToken: string;
  accessToken: string;
  user: IUser;
  name: string;
  surname: string;
}
