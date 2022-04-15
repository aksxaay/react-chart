// import logo from './logo.svg';
import "./App.css";

import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// Essential Components
import Navbar from "./components/navbar";
import About from "./components/about";
import Contact from "./components/contact";
import Home from "./components/home";

import Main from "./pages/main";
import ReactBootstrap from "./pages/reactBootstrap.jsx";
import TailwindExperiments from "./pages/tailwindExperiments";
import TailwindExperiments2 from "./pages/tailwindExperiments2";

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

          <Route exact path="/react-bootstrap" element={<ReactBootstrap />} />
          <Route
            exact
            path="/tailwind-experiments"
            element={<TailwindExperiments />}
          />

          <Route
            exact
            path="/tailwind-experiments2"
            element={<TailwindExperiments2 />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
