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
