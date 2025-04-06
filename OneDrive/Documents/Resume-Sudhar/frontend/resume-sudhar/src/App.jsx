import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Products from "./Pages/Products";
import About from "./Pages/About";
import UploadResume from "./Pages/UploadResume";
import Contact from "./Pages/Contact";
import Result from "./Pages/Result";
import Suggestion from "./Pages/Suggestion";
import Interview from "./Pages/Interview";
import Register from "./Pages/Signup";
import Login from "./Pages/Loggedin";
import ResumeExample from "./Pages/ResumeExample";
import OurTeam from "./Pages/OurTeam";
import CreateResume from "./Pages/createresume";
import ResumeResul from "./Pages/ResumeResult";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/resume" element={<UploadResume />} />
      <Route path="/result" element={<Result />} />
      <Route path="/suggestion" element={<Suggestion />} />
      <Route path="/interview" element={<Interview />} />
      <Route path="/signup" element={<Register />} />
      <Route path="/loggedin" element={<Login />} />import React from "react";
      <Route path="/resumetemplete" element={<ResumeExample />} />
      <Route path="/ourteam" element={<OurTeam />} />
      <Route path="/createresume" element={<CreateResume />} />
      <Route path="/resumeresult" element={<ResumeResul />} />
    </Routes>
  );
};

export default AppRoutes;