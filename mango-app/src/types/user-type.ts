export type User = {
  email: string;
  password: string;
  confirmpassword: string;
};

export type UserError = {
  email: boolean;
  password: boolean;
  confirmpassword: boolean;
};

export type UserLogin = {
  email: string;
  password: string;
};

export type ErrorLogin = {
  message: string;
  type: string;
};
