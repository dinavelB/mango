import { type UserError, type User } from "../../types/user-type";
import UserInfo from "../../services/create-account";

export const createAccount = async (
  data: User,
  setErrors: React.Dispatch<React.SetStateAction<UserError>>, //create a user-defined setState
) => {
  const { email, password, confirmpassword } = data;

  const error = {
    email: !email,
    password: !password,
    confirmpassword: !confirmpassword,
  };

  setErrors(error);

  const userobj = new UserInfo();

  try {
    const response = await userobj.createAcc(data); //awaits service frontend response from the controller
    console.log(response.data);
  } catch (error: any) {
    console.log(error.message);
    console.log(error.response.data);
  }
};
