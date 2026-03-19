import { Router } from "express";
import { createSessionController, updateSessionController } from "../controllers/sessions/session-controller.js";
import { getSessionController } from "../controllers/sessions/session-controller.js";

const sessionRouter = Router();

sessionRouter.post('/api/sessions', createSessionController);

sessionRouter.get('/api/sessions/:id', getSessionController);

sessionRouter.put('/api/sessions/:id', updateSessionController);

export default sessionRouter;