import { Router } from "express";
import adminController from "../controllers/admin-controller.js";


const adminRoutes = Router();

adminRoutes.get("/admin/dashboard", adminController);

export default adminRoutes;