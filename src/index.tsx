import { XnoteProvider } from "common/context/XnoteContext";
import React from "react";
import ReactDOM from "react-dom";
import Router from "./router";
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

ReactDOM.render(
  <React.StrictMode>
    <ToastContainer theme="dark" autoClose={1500}/>
    <XnoteProvider>
      <Router />
    </XnoteProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
