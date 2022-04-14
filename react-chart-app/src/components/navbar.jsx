import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <h1 className="flex  justify-center text-slate-700">NavBar</h1>

      <div className="flex items-center justify-center">
        <div className="m-5 flex h-40 w-40 items-center justify-center border-2 border-purple-400">
          <ul className="text-center">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/main">Main</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
            <hr className="border-2" />
            <li>
              <Link to="/react-bootstrap">React Bootstrap</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
