import { useState } from "react";
import google from "../assets/Google.jpg";

export default function FormComponent() {
  const [data, setData] = useState({
    loginemail: "",
    loginpassword: "",
  });

  function getInput(e: any) {
    const { name, value } = e.target;

    setData((prevInput) => ({
      ...prevInput,
      [name]: value,
    }));
  }

  return (
    <section className="flex justify-center h-full pt-60">
      <section className="flex">
        <div className=""></div>
        <div className="flex flex-col p-10 gap-3 shadow-black-200 shadow-xl rounded-lg bg-white h-auto w-auto">
          <div className="flex flex-col items-center gap-3">
            <h1 className="text-3xl font-extrabold">Login</h1>
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
            onChange={getInput}
            name="loginemail"
            type="email"
            placeholder="Enter your email"
            className="border-1 pl-5 py-3 rounded text-base outline-none shadow-borderColor shadow-inner"
          />
          <label className="text-xl" htmlFor="">
            Password
          </label>
          <input
            onChange={getInput}
            name="loginpassword"
            type="password"
            placeholder="Enter your password"
            className="border-1 pl-5 py-3 rounded text-base outline-none shadow-borderColor shadow-inner"
          />
          <button
            type="button"
            className="bg-highlight text-white w-48 ml-27 rounded-sm py-2 transition duration-300 hover:bg-purple-800"
          >
            Login
          </button>
        </div>
      </section>
    </section>
  );
}
