import HeroSection from "./HeroSection";
import { useNavigate } from "react-router-dom";

export default function Nav() {
  const nav = useNavigate();

  const logoClick = () => {
    nav("/");
  };
  return (
    <nav className="">
      <section
        className="flex justify-between p-6 px-30 
  border-borderColor border-b-1 
  fixed top-0 w-full 
  backdrop-blur-lg bg-white/30"
      >
        <h1
          className=" font-mango text-3xl transform transition duration-200 ease-in-out hover:-translate-y-1 hover:text-purple-700"
          onClick={logoClick}
        >
          mango
        </h1>
      </section>
    </nav>
  );
}
