import { type UserError, type User } from "../../types/user-type";
import { useNavigate } from "react-router-dom";
import UserInfo from "../../services/create-account";

export const createAccount = async (
  data: User,
  setErrors: React.Dispatch<React.SetStateAction<UserError>>,
) => {
  const { email, password, confirmpassword } = data;

  const passwordsMatch = password === confirmpassword;

  const error = {
    email: !email,
    password: !password,
    confirmpassword: !confirmpassword || !passwordsMatch,
  };

  setErrors(error);

  if (!passwordsMatch) {
    console.log("Passwords don't match");
    return;
  }

  const userobj = new UserInfo();

  try {
    const response = await userobj.createAcc(data); //awaits service frontend response from the controller
    console.log(response.data);
  } catch (error: any) {
    console.log(error.message);
    console.log(error.response.data);
  }
};
