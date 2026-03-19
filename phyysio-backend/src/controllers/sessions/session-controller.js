import { createSession } from "../../models/session/session.js";
import { getSessionByCpf } from "../../models/session/session.js";
import { updateSession } from "../../models/session/session.js";

async function createSessionController(req,res) {
    const sessionData = req.body;
    try {
        const newSession = await createSession(sessionData);
        res.status(201).json(newSession);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function getSessionController(req,res) {
    const cpf = req.params.id;
    try {
        const session = await getSessionByCpf(cpf);
        if (session) {
            res.status(200).json(session);
        } else {
            res.status(404).json({ error: "Session not found" });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function updateSessionController(req,res) {
    const cpf = req.params.id;
    const sessionData = req.body;
    try {
        const updatedSession = await updateSession(cpf, sessionData);
        if (updatedSession) {
            res.status(200).json(updatedSession);
        } else {
            res.status(404).json({ error: "Session not found" });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}


export {
     createSessionController, getSessionController,
     updateSessionController

 };