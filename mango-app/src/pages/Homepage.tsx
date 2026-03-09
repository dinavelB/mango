import NavBar from "../components/sub-components/NavBar";
import HeroSection from "../components/sub-components/HeroSection";
import Feature from "../components/sub-components/Features";
import Footer from "../components/sub-components/Footer";
import { useEffect } from "react";

export default function Homepage() {
  useEffect(() => {}, []);
  return (
    <section className=" bg-pattern-dot min-h-screen">
      <NavBar />
      <HeroSection />
      <Feature />
      <Footer />
    </section>
  );
}
