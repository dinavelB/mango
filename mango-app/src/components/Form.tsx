export default function Form() {
  return (
    <section className="flex justify-center h-full mt-21 p-20">
      <section className="flex">
        <div className="h-auto w-100 bg-borderColor"></div>
        <div className="flex flex-col p-10 gap-5">
          <h1>Signup</h1>
          <p>explore mango by creating an account</p>
          <button>Sign up with Google</button>
          <label htmlFor="">Email</label>
          <input
            type="text"
            placeholder="Enter your email"
            className="border-borderColor border-1"
          />
          <label htmlFor="">Password</label>
          <input
            type="text"
            placeholder="Enter your password"
            className="border-borderColor border-1"
          />
          <label htmlFor="">Confirm Password</label>
          <input
            type="text"
            placeholder="Confirm your password"
            className="border-borderColor border-1"
          />
        </div>
      </section>
    </section>
  );
}
