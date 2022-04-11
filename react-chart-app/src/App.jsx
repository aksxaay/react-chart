// import logo from './logo.svg';
import "./App.css";

import React from "react";
import ReactDOM from "react-dom";
import SunWrapper from "./SunWrapper.js";
import SunburstChart from "./SunburstChart.js";
import Button from "@mui/material/Button";

// fonts
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

// custom scripts
import useScript from "./hooks/useScript.js";

function App() {
  // custom Scripts
  // useScript(
  //   "https://unpkg.com/@mui/material@latest/umd/material-ui.development.js"
  // );

  return (
    <>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
      />

      <div className="App">
        <header className="App-header">
          <h1 className="text-3xl font-bold">Hello world!</h1>

          <div class="main-title ml-4 flex h-24 border-2 border-gray-300 p-4 text-gray-50 shadow-md">
            Sunburst Chart
          </div>

          <div className="App">
            <h3>This is a new chart</h3>
            <div className="m-[2em] h-full border-y-8 p-[2em]">
              <Button variant="contained">Hello World</Button>
            </div>
            <SunWrapper />
          </div>
        </header>
      </div>
    </>
  );
}

export default App;
