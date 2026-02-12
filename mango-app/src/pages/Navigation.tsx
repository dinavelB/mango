import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./Homepage";
import Signup from "./Signup";
import Login from "./Login";

export default function Navigation() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}
