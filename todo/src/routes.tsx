import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import Home from "./pages/Home";
import Todo from "./pages/Todo";
import { useState } from "react";

const AppRoutes = () => {
  
  const auth = useContext(AuthContext);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/todo" element={auth?.isAuthenticated ? <Todo /> : <Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
