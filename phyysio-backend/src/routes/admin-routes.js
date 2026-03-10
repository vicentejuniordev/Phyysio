import { Router } from "express";
import adminController from "../controllers/admin/admin-controller.js";


const adminRoutes = Router();

adminRoutes.get("/admin", adminController);

export default adminRoutes;