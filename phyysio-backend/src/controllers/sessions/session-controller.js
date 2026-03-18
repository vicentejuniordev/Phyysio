import { createSession } from "../../models/session/session.js";

async function createSessionController(req,res) {
    const sessionData = req.body;
    try {
        const newSession = await createSession(sessionData);
        res.status(201).json(newSession);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}


export { createSessionController };