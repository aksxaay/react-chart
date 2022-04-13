// import logo from './logo.svg';
import "./App.css";

import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import SunWrapper from "./SunWrapper.js";
import SunburstChart from "./SunburstChart.js";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

// fonts
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

// custom scripts
import useScript from "./hooks/useScript.js";

// Routes
import Home from "./components/home";
import About from "./components/about";
import Contact from "./components/contact";

function App() {
  // custom Scripts
  useScript(
    "https://unpkg.com/@mui/material@latest/umd/material-ui.development.js"
  );

  return (
    <Router>
      {/* fragment start */}
      <>
        {/* ROUTES */}
        <Routes>
          <Route exact path="/home" element={<Home />}></Route>
          <Route exact path="/about" element={<About />}></Route>
          <Route exact path="/contact" element={<Contact />}></Route>
        </Routes>

        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />

        <div className="App">
          <header className="App-header">
            <Typography variant="h3" component="div" gutterBottom>
              h3. Roboto Font
            </Typography>
            <h1 className="text-3xl font-bold">Hello world!</h1>

            <div class="main-title ml-4 flex h-24 border-2 border-gray-300 p-4 text-gray-50 shadow-md">
              Sunburst Chart
            </div>

            {/* Navigation */}
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

            {/* Smooth Chart */}
            <div className="App">
              <h3>This is a new chart</h3>
              <div className="m-[2em] h-full border-y-8 p-[2em]">
                <Button variant="contained">Sign In</Button>
                <Button variant="contained">
                  <Link to="/expenses">Link change to expenses</Link>
                </Button>
              </div>
              <SunWrapper />
            </div>
          </header>
        </div>
      </>
    </Router>
  );
}

export default App;
