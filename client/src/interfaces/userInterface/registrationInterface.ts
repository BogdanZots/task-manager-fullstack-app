export interface IRegistration {
  email: string;
  password: string;
  name: string;
  surname: string;
  role: string;
}

export interface IRegistrationSuccess {
  accessToken: string;
  refreshToken: string;
  user: {
    email: string;
    password: string;
    name: string;
    surname: string;
    role: string;
  };
}

export interface ILogin {
  email: string;
  password: string;
}

export interface ILoginSuccess {
  isAuth: boolean;
  data: {
    accessToken: string;
    refreshToken: string;
    user: {
      email: string;
      password: string;
      name: string;
      surname: string;
      role: string;
    };
  };
}
