import { Router } from "express";
import { createSessionController } from "../controllers/sessions/session-controller.js";
import { getSessionController } from "../controllers/sessions/session-controller.js";

const sessionRouter = Router();

sessionRouter.post('/api/sessions', createSessionController);

sessionRouter.get('/api/sessions/:id', getSessionController);

export default sessionRouter;