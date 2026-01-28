import NavBar from "../components/NavBar";
import HeroSection from "../components/HeroSection";
import Feature from "../components/Features";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function Homepage() {
  useEffect(() => {}, []);
  return (
    <>
      <NavBar />
      <HeroSection />
      <Feature />
      <Footer />
    </>
  );
}
