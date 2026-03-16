import { Router } from "express";
import { createUserController } from "../controllers/admin/admin-controller.js";
import { getUserByCpfController } from "../controllers/admin/admin-controller.js";
import { updateUserController } from "../controllers/admin/admin-controller.js";
import { deleteUserController } from "../controllers/admin/admin-controller.js";


const userRoutes = Router();

userRoutes.post("/api/users", createUserController );
userRoutes.get("/api/users/:cpf", getUserByCpfController);
userRoutes.put("/api/users/:cpf", updateUserController);
userRoutes.delete("/api/users/:cpf", deleteUserController);
export default userRoutes;