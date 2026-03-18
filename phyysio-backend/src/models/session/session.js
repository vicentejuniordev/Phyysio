import getPool from "../../database/database.js";

async function createSession(sessionData) {
    try {
        const pool = await getPool();
        const query = 'INSERT INTO sessions (user_cpf, quantity, observations) VALUES ($1, $2, $3) RETURNING *';
        const values = [sessionData.user_cpf, sessionData.quantity, sessionData.observations];
        const result = await pool.query(query, values);
        return result.rows[0];
    } catch (error) {
        console.error('Error creating session:', error);
        throw error;
    }  
}


async function deleteSession(cpf) {
    try {
        const pool = await getPool();
        const query = 'DELETE FROM sessions WHERE user_cpf = $1';
        const values = [cpf];
        await pool.query(query, values);
    } catch (error) {
        console.error('Error deleting session:', error);
        throw error;
    }
}

async function getSessionByCpf(cpf) {
    try {
        const pool = await getPool();
        const query = 'SELECT * FROM sessions WHERE user_cpf = $1';
        const values = [cpf];
        const result = await pool.query(query, values);
        return result.rows[0];
    } catch (error) {
        console.error('Error fetching session by CPF:', error);
        throw error;
    }
}

async function updateSession(cpf, sessionData) {
    try {
        const pool = await getPool();
        const query = 'UPDATE sessions SET quantity = $1, observations = $2 WHERE user_cpf = $3 RETURNING *';
        const values = [sessionData.quantity, sessionData.observations, cpf];
        const result = await pool.query(query, values);
        return result.rows[0];
    } catch (error) {
        console.error('Error updating session:', error);
        throw error;
    }
}

export {
    createSession,
    deleteSession,
    getSessionByCpf,
    updateSession
}   





