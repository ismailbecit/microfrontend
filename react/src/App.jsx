import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import Test from "./Test";

const App = () => (
  <div className="container">
    <Test />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
