import { useState } from "react";
import { useNavigate } from "react-router-dom";
import google from "../assets/Google.jpg";
import { createAccount } from "../util/helper/account-creation";
import { validatePassword } from "../util/helper/password-format-helper";
import { StrengthBar } from "./Validators";
import Nav from "./Nav";

export default function Form() {
  const nav = useNavigate();
  const [data, setData] = useState({
    email: "",
    password: "",
    confirmpassword: "",
  });

  const [errors, setErrors] = useState({
    email: false,
    password: false,
    confirmpassword: false,
  });

  const [passwordErrors, setPasswordErrors] = useState<string[]>([]);
  const [showPasswordMatchError, setShowPasswordMatchError] = useState(false);

  const hasPassword = data.password.length > 0;

  // show strength bar when there is a password
  const getStrength = () => {
    if (!hasPassword) return null;

    const errorCount = passwordErrors.length;
    if (errorCount === 0) return "strong";
    if (errorCount <= 2) return "medium";
    return "weak";
  };

  const strength = getStrength();

  const createacc = () => {
    const response = createAccount(data, setErrors)
      .then(() => {
        nav("/login");
      })
      .catch(() => console.log("error creating an account"));
  };

  const getuserinput = (e: any) => {
    const { name, value } = e.target;

    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    if (value.trim() !== "") {
      setErrors((prevData) => ({
        ...prevData,
        [name]: false,
      }));
    }

    if (name === "password") {
      const validation = validatePassword(value);
      setPasswordErrors(validation.errors);
      // Also check confirm password when password changes
      if (data.confirmpassword) {
        setShowPasswordMatchError(value !== data.confirmpassword);
      }
    } else if (name === "confirmpassword") {
      setShowPasswordMatchError(value !== data.password);
    }
  };

  return (
    <section className="flex justify-center h-full pt-40">
      <section className="flex">
        <div className=""></div>
        <div className="flex flex-col p-10 gap-3 shadow-black-200 shadow-xl rounded-lg bg-white h-150 w-auto">
          <div className="flex flex-col items-center gap-3">
            <h1 className="text-3xl font-extrabold">Signup</h1>
            <p className="text-lg">explore mango by creating an account</p>
            <button className="bg-grayColor text-xl py-2 px-10 rounded-lg flex justify-center w-100 gap-2">
              <img src={google} alt="" />
              Sign up with Google
            </button>
          </div>
          <label className="text-xl" htmlFor="">
            Email
          </label>
          <input
            name="email"
            type="email"
            value={data.email}
            placeholder="Enter your email"
            className={`border-1 pl-5 py-3 rounded text-base outline-none shadow-borderColor shadow-inner ${
              errors.email ? "border-red-500" : "border-borderColor"
            }`}
            onChange={getuserinput}
          />
          <label className="text-xl" htmlFor="">
            Password
          </label>
          <input
            value={data.password}
            name="password"
            type="password"
            placeholder="Enter your password"
            className={`border-1 pl-5 py-3 rounded text-base outline-none shadow-borderColor shadow-inner ${
              errors.password ? "border-red-500" : "border-borderColor"
            }`}
            onChange={getuserinput}
          />
          <label className="text-xl" htmlFor="">
            Confirm Password
          </label>
          <input
            value={data.confirmpassword}
            name="confirmpassword"
            type="password"
            placeholder="Confirm your password"
            className={`border-1 pl-5 py-3 rounded text-base outline-none shadow-borderColor shadow-inner ${
              errors.confirmpassword ? "border-red-500" : "border-borderColor"
            }`}
            onChange={getuserinput}
          />
          {hasPassword && (
            <StrengthBar
              strength={strength}
              passwordErrors={passwordErrors}
              showPasswordMatchError={showPasswordMatchError}
              data={data}
              errors={errors}
            />
          )}
          <button
            type="button"
            onClick={createacc}
            className="bg-highlight text-white w-48 ml-27 rounded-sm py-2 transition duration-300 hover:bg-purple-800"
          >
            Signup
          </button>
        </div>
      </section>
    </section>
  );
}
