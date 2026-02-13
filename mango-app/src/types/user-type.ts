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
  loginemail: string;
  loginpassword: string;
};
