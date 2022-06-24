import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import ReactTest from "react/Test"
import React2Test from "react_2/Test"
const App = () => (
  <div className="container">
    <ReactTest />
    <React2Test />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
