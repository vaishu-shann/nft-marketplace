import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ThemeProvider } from "./context/theme-context";
import { Web3Global } from "./context/global-context";
import { BrowserRouter as Router } from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider>
    <Web3Global>
      <Router>
          <App />
      </Router>
    </Web3Global>
  </ThemeProvider>
);
reportWebVitals();
