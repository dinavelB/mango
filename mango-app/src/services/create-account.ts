import { type User, type UserError } from "../types/user-type";
import { api } from "../util/api/base-url";

export default class UserInfo {
  createAcc = async (userData: User) => {
    const { email, password, confirmpassword } = userData;

    const errors = {
      email: !email,
      password: !password,
      confirmpassword: !confirmpassword,
    };

    if (errors.email || errors.password || errors.confirmpassword) {
      throw new Error("all fields must be filled"); //catches by err.message
    }

    try {
      const response = await api.post("/", userData); //awaits controller res
      console.log("request reached sucessfully");
      return response.data; //what the backend sents
    } catch (error: any) {
      console.log("error:", error.message);
    }
  };
}
