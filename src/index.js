import React from "react";
import { render } from "react-dom";
import "./index.css";
import App from "./apps/App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import AuthProviders from "./contexts";

const app = (
  <AuthProviders>
    <App />
  </AuthProviders>
);

render(app, document.getElementById("root"));

reportWebVitals();
