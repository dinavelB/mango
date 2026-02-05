import { type User } from "../types/user-type";
import { api } from "../util/api/base-url";

export default class UserInfo {
  createAcc = async (userData: User): Promise<User> => {
    try {
      const response = await api.post("/", userData); //awaits controller res
      console.log("request reached sucessfully");
      return response.data; //what the backend sents
    } catch (error: any) {
      throw error;
    }
  };
}
