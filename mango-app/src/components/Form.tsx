import { useState } from "react";
import google from "../assets/Google.jpg";
import UserInfo from "../services/create-account";
import { Routes } from "react-router-dom";
import { createAccount } from "../util/helper/account-creation";

export default function Form() {
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

  const getuserinput = (e: any) => {
    const { name, value } = e.target; //initialize

    //to prevent erasing inputs
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    //if the value is not equals to trim ""
    //truthy became falsy since errors are truthy now
    if (value.trim() !== "") {
      setErrors((prevData) => ({
        ...prevData,
        [name]: false, //
      }));
    }
  };

  return (
    <section
      className="flex justify-center h-full pt-40
    "
    >
      <section className="flex">
        <div className="h-auto w-150 bg-borderColor"></div>
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
            name="confirmpassword"
            type="password"
            placeholder="Confirm your password"
            className={`border-1 pl-5 py-3 rounded text-base outline-none shadow-borderColor shadow-inner ${
              errors.confirmpassword ? "border-red-500" : "border-borderColor"
            }`}
            onChange={getuserinput}
          />
          <button
            type="button"
            onClick={() => createAccount(data, setErrors)}
            className="bg-highlight text-white w-48 ml-27 rounded-sm py-2 transition duration-300 hover:bg-purple-800"
          >
            Signup
          </button>
        </div>
      </section>
    </section>
  );
}
