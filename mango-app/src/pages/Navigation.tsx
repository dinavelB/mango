import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./Homepage";
import Signup from "./Signup";

export default function Navigation() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}
