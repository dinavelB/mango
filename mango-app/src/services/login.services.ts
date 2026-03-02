import type { UserLogin } from "../types/user-type";
import { api } from "../util/api/base-url";
import { AxiosError } from "axios";

export default class LoginUser {
  createAcc = async (user: UserLogin) => {
    const { email, password } = user;

    const errors = {
      email: !email || email.trim() === "",
      password: !password || password.trim() === "",
    };

    if (errors.email || errors.password) {
      throw new Error("all fields must be filled");
    }

    try {
      const response = await api.post("/login", user);
      return response;
    } catch (error: any) {
      if (error instanceof AxiosError && error.response) {
        throw new Error(error.response.data.message || "Login failed");
      }

      throw error;
    }
  };
}
