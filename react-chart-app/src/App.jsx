// import logo from './logo.svg';
import "./App.css";

import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// Essential Components
import Navbar from "./components/navbar";
import Main from "./pages/main";

// Routes
// import Main from "./pages/main";
import Home from "./components/home";

import About from "./components/about";
import Contact from "./components/contact";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/main" element={<Main />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
        {/* <Main /> */}
      </Router>
    </>
  );
}

export default App;
