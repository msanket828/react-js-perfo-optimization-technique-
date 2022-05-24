import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Parent from "./Parent";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  /* ------ useCallback technique to prevent unwanted component to render ----- */
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
  <React.StrictMode>
    <Parent />
  </React.StrictMode>
);
