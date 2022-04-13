import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// Routes
import Home from "./components/home";
import About from "./components/about";
import Contact from "./components/contact";

function Navbar() {
  return (
    <>
      {/* ROUTES */}
      <Route exact path="/" element={<Home />}></Route>
      <Route exact path="/about" element={<About />}></Route>
      <Route exact path="/contact" element={<Contact />}></Route>

      {/* Navigation*/}
      <div className="m-5 border-2 border-purple-400">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
