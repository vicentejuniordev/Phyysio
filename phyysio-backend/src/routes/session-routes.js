import { Router } from "express";
import { createSessionController } from "../controllers/sessions/session-controller.js";

const sessionRouter = Router();

sessionRouter.post('/api/sessions', createSessionController);

export default sessionRouter;