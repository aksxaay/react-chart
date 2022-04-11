// import logo from './logo.svg';
import "./App.css";

import React from "react";
import ReactDOM from "react-dom";
import SunWrapper from "./SunWrapper.js";
import SunburstChart from "./SunburstChart.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="text-3xl font-bold">Hello world!</h1>

        <div class="main-title ml-4 flex h-24 border-2 border-gray-300 p-4 text-gray-50 shadow-md">
          Sunburst Chart
        </div>

        <div className="App">
          <h3>This is a new chart</h3>
          <SunWrapper />
        </div>
      </header>
    </div>
  );
}

export default App;
