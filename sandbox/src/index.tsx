// src/index.tsx
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

// Render the App component into the root div in your HTML
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
