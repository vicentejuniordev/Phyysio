import { Router } from "express";


const adminRoutes = Router();

adminRoutes.get("/admin/dashboard", (req, res) => {
  res.send("Admin Dashboard");
});

export default adminRoutes;