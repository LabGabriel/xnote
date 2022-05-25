import { XnoteProvider } from "common/context/XnoteContext";
import React from "react";
import ReactDOM from "react-dom";
import Router from "./router";

ReactDOM.render(
  <React.StrictMode>
    <XnoteProvider>
      <Router />
    </XnoteProvider>
  </React.StrictMode>,
  document.getElementById("root")
);