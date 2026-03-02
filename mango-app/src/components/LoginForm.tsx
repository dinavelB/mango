import { useState } from "react";
import google from "../assets/Google.jpg";
import LoginUser from "../services/login.services";
import type { ErrorLogin } from "../types/user-type";
import { useNavigate } from "react-router-dom";
export default function FormComponent() {
  const login = new LoginUser();
  const nav = useNavigate();

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState<ErrorLogin>({
    message: "",
    type: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  function getInput(e: any) {
    const { name, value } = e.target;

    // Clear error when user starts typing
    if (error.message) {
      setError({ message: "", type: "" });
    }

    setData((prevInput) => ({
      ...prevInput,
      [name]: value,
    }));
  }

  const handleLogin = async () => {
    setIsLoading(true);
    setError({ message: "", type: "" });

    try {
      const response = await login.createAcc(data);
      console.log("Login successful", response);

      if (response.data.success) {
        nav("/dashboard"); // or use router.push
      }
    } catch (err: any) {
      console.log("Error caught:", err);

      // Handle different types of errors
      if (err.message === "all fields must be filled") {
        setError({
          message: "All fields must be filled",
          type: "validation",
        });
      } else if (err.response?.status === 401) {
        // Backend auth error
        setError({
          message: err.response.data.message || "Invalid email or password",
          type: "auth",
        });
      } else {
        // Generic error
        setError({
          message: err.message || "An error occurred",
          type: "auth",
        });
      }
    } finally {
      setIsLoading(false);
    }
  };

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

          <label className="text-xl" htmlFor="email">
            Email
          </label>
          <input
            onChange={getInput}
            name="email"
            type="email"
            value={data.email}
            placeholder="Enter your email"
            className={`border-1 pl-5 py-3 rounded text-base outline-none shadow-borderColor shadow-inner ${
              error.type === "validation" && !data.email
                ? "border-red-500 border-2"
                : error.type === "auth"
                  ? "border-red-500 border-2"
                  : ""
            }`}
          />

          <label className="text-xl" htmlFor="password">
            Password
          </label>
          <input
            onChange={getInput}
            name="password"
            type="password"
            value={data.password}
            placeholder="Enter your password"
            className={`border-1 pl-5 py-3 rounded text-base outline-none shadow-borderColor shadow-inner ${
              error.type === "validation" && !data.password
                ? "border-red-500 border-2"
                : error.type === "auth"
                  ? "border-red-500 border-2"
                  : ""
            }`}
          />

          {/* Error Message Display */}
          {error.message && (
            <div
              className={`text-sm mt-1 ${
                error.type === "validation" ? "text-orange-600" : "text-red-600"
              }`}
            >
              <div className="flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>{error.message}</span>
              </div>
            </div>
          )}

          <button
            type="button"
            disabled={isLoading}
            className={`bg-highlight text-white w-48 ml-27 rounded-sm py-2 transition duration-300 ${
              isLoading
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-purple-800"
            }`}
            onClick={handleLogin}
          >
            {isLoading ? "Logging in..." : "Login"}
          </button>
        </div>
      </section>
    </section>
  );
}
