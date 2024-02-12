import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import AuthedContext from "./Context/Context.js";
import AuthedContextProvider from "./Context/AuthedContext.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthedContextProvider>
      <App />
    </AuthedContextProvider>
  </React.StrictMode>
);
