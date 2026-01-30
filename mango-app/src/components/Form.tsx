import google from "../assets/Google.jpg";

export default function Form() {
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
            type="email"
            placeholder="Enter your email"
            className="border-borderColor border-1 pl-5 py-3 rounded text-base outline-none shadow-borderColor shadow-inner"
          />
          <label className="text-xl" htmlFor="">
            Password
          </label>
          <input
            type="password"
            placeholder="Enter your password"
            className="border-borderColor border-1 pl-5 py-3 rounded text-base outline-none shadow-borderColor shadow-inner"
          />
          <label className="text-xl" htmlFor="">
            Confirm Password
          </label>
          <input
            type="password"
            placeholder="Confirm your password"
            className="border-borderColor border-1 pl-5 py-3 rounded text-base outline-none shadow-borderColor shadow-inner "
          />
          <button className="bg-highlight text-white w-48 ml-27 rounded-sm py-2 transition duration-300 hover:bg-purple-800">
            Signup
          </button>
        </div>
      </section>
    </section>
  );
}
