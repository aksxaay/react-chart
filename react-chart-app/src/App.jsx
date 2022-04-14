// import logo from './logo.svg';
import "./App.css";

import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// Essential Components
import Navbar from "./components/navbar";
import Main from "./pages/main";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Main />
      </Router>
    </>
  );
}

export default App;
