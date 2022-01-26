import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";

import AppBase from "./components/app/appBase";

/* IMPORT : CSS */
import "./index.css";

ReactDOM.render(
  <StrictMode>
    <AppBase />
  </StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
