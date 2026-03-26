import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";

import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import Home from "../pages/Home/Home";

function AppRoutes() {
  return (
    <BrowserRouter>
     <Routes>
      <Route element={<Home />} path="/" />
      <Route element={<Login />} path="/login" />
      <Route element={<Register />} path="/register" />

     </Routes>    
    </BrowserRouter>
  );
}

export default AppRoutes;