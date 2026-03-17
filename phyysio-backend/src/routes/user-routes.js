import { Router } from "express";
import { createUserController } from "../controllers/users/user-controller.js";
import { getUserByCpfController } from "../controllers/users/user-controller.js";
import { updateUserController } from "../controllers/users/user-controller.js";
import { deleteUserController } from "../controllers/users/user-controller.js";


const userRoutes = Router();

userRoutes.post("/api/users", createUserController );
userRoutes.get("/api/users/:cpf", getUserByCpfController);
userRoutes.put("/api/users/:cpf", updateUserController);
userRoutes.delete("/api/users/:cpf", deleteUserController);

export default userRoutes;