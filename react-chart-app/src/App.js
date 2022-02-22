// import logo from './logo.svg';
import "./App.css";

import React from "react";
import ReactDOM from "react-dom";
import SunWrapper from "./SunWrapper";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div class="main-title">Sunburst Chart</div>

        <div className="App">
          <h3>This is a new chart</h3>
          {/* <SunburstAnyChart /> */}
          <SunWrapper />
        </div>
      </header>
    </div>
  );
}

export default App;
