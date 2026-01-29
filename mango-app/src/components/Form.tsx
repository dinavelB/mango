import google from "../assets/Google.jpg";

export default function Form() {
  return (
    <section
      className="flex justify-center h-full mt-21 p-23
    "
    >
      <section className="flex">
        <div className="h-auto w-150 bg-borderColor"></div>
        <div className="flex flex-col p-10 gap-3 border-gray-500 border-1 rounded-lg bg-white h-150 w-100">
          <div className="flex flex-col items-center gap-3">
            <h1 className="text-xl font-extrabold">Signup</h1>
            <p className="text-xs">explore mango by creating an account</p>
            <button className="bg-grayColor text-sm py-2 px-10 rounded-lg flex gap-2">
              <img src={google} alt="" />
              Sign up with Google
            </button>
          </div>
          <label htmlFor="">Email</label>
          <input
            type="text"
            placeholder="Enter your email"
            className="border-borderColor border-1 pl-5 py-2 rounded text-sm outline-none"
          />
          <label htmlFor="">Password</label>
          <input
            type="text"
            placeholder="Enter your password"
            className="border-borderColor border-1 pl-5 py-2 rounded text-sm outline-none"
          />
          <label htmlFor="">Confirm Password</label>
          <input
            type="text"
            placeholder="Confirm your password"
            className="border-borderColor border-1 pl-5 py-2 rounded text-sm outline-none"
          />
          <button className="bg-highlight text-white w-48 ml-13 rounded-sm py-1 transition duration-300 hover:bg-purple-800">
            Signup
          </button>
        </div>
      </section>
    </section>
  );
}
