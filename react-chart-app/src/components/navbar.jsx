import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// Routes
import Home from "./home";
import About from "./about";
import Contact from "./contact";

const Navbar = () => {
  return (
    <>
      <Routes exact path="/" element={<Home />} />
      <Routes exact path="/about" element={<About />} />
      {/* <Route exact path="/contact" element={<Contact />} /> */}
      <div className="m-5 border-2 border-purple-400">
        <ul>
          <li>{/* <Link to="/">Home</Link> */}</li>
          <li>{/* <Link to="/about">About Us</Link> */}</li>
          <li>{/* <Link to="/contact">Contact Us</Link> */}</li>
        </ul>
      </div>
      <h1 className="flex justify-center">Heya</h1>
    </>
  );
};

export default Navbar;
