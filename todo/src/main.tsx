import React from "react";
import ReactDOM from "react-dom/client";
import AppRoutes from "./routes";
import "./index.css";
import AuthContextProvider  from "./context/AuthContext"; // Import AuthProvider

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AuthContextProvider>
      <AppRoutes />
    </AuthContextProvider>
  </React.StrictMode>
);
