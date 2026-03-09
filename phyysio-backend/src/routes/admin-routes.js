import { Router } from "express";


const adminRoutes = Router();

adminRoutes.get("/dashboard", (req, res) => {
  res.send("Admin Dashboard");
});