import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./assets/styles/index.css";
import { BrowserRouter } from "react-router-dom";
import jwtInterceptor from "./utils/jwtInterceptor";
import { AuthProvider } from "./contexts/authentication";
//axios interceptor for checking token, attach the token to the header in every request 
jwtInterceptor();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <App />
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
