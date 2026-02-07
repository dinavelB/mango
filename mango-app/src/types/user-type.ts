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
