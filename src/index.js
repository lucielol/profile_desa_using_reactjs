import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./store";
import App from "./App";
import axios from "axios";
import "./index.css";
import "@fontsource/roboto";

axios.defaults.withCredentials = true;
// axios.defaults.withXSRFToken = true;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
