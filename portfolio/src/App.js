import React from "react";
import "./App.scss";
import Navbar from "./components/navbar-index";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Portfolio from "./pages/portfolio";
import Contact from "./pages/contact";
import Blog from "./pages/blog";
import SignUp from "./pages/signIn";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="sign-in" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;
