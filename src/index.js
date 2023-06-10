import React from "react";
import { createRoot } from "react-dom/client";
import AppContainer from "./containers/AppContainer";
import "react-toastify/dist/ReactToastify.css"; 
import {ToastContainer} from 'react-toastify';

const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppContainer />
    <ToastContainer />
  </React.StrictMode>
);
