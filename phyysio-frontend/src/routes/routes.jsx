import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";


import Login from "../pages/Login/Login";
import Home from "../pages/Home/Home";

function AppRoutes() {
  return (
    <BrowserRouter>
     <Routes>
      <Route element={<Home />} path="/" />
       <Route element={<Login />} path="/login" />
     </Routes>    
    </BrowserRouter>
  );
}

export default AppRoutes;