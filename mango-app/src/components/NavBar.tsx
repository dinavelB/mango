import { useNavigate } from "react-router-dom";
import "../styles/index.css";

export default function NavBar() {
  const nav = useNavigate();

  const gotoSignup = () => {
    nav("/signup");
  };

  const login = () => {
    nav("/login");
  };
  return (
    <>
      <nav className="">
        <section
          className="flex justify-between p-6 px-30 
  border-borderColor border-b-1 
  fixed top-0 w-full 
  backdrop-blur-lg bg-white/30"
        >
          <h1 className=" font-mango text-3xl">mango</h1>
          <div className=" p-0 flex gap-10">
            <button
              onClick={login}
              className="px-10 p-2 text-center bg-muted rounded-xl text-xl transition duration-300 ease-in-out transform hover:-translate-y-2 hover:bg-purple-400 hover:text-white"
            >
              Login
            </button>
            <button
              onClick={gotoSignup}
              className="px-10 p-2 text-center bg-highlight rounded-xl text-white text-x transition duration-300 ease-in-out transform hover:-translate-y-2 hover:bg-purple-800"
            >
              Sign up
            </button>
          </div>
        </section>
      </nav>
    </>
  );
}
