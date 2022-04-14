import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import SunWrapper from "../SunWrapper.js";
import SunburstChart from "../SunburstChart.js";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

// fonts
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

// custom scripts
import useScript from "../hooks/useScript.js";

function Main() {
  // custom Scripts
  useScript(
    "https://unpkg.com/@mui/material@latest/umd/material-ui.development.js"
  );
  return (
    <>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
      />

      <h1>HEY</h1>

      <div className="App">
        <header className="App-header">
          <Typography variant="h3" component="div" gutterBottom>
            h3. Roboto Font
          </Typography>
          <h1 className="text-3xl font-bold">Hello world!</h1>

          <div className="main-title stext-gray-50 ml-4 flex h-24 border-2 border-gray-300 p-4 shadow-md">
            Sunburst Chart
          </div>

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
  );
}

export default Main;
