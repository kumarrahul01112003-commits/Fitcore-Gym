import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Navbar";
import Section from "./Section";
import Slideup from "./Slideup";
import Signup from "./Signup";
import Member from "./Member";

import "./index.css";
import "./Navbar.css";
import Login from "./login";


const Home = () => {
  return (
    <>
      <Navbar />
      <Section />
      <Slideup />
    </>
  );
};


const App = () => {

  return (
    <BrowserRouter>

      <Routes>

       
        <Route path="/" element={<Home />} />

       
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />

        
        <Route path="/membership" element={<Member />} />

      </Routes>

    </BrowserRouter>
  );
};


export default App;