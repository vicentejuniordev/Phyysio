import getPool from "../../database/database.js";

async function createUser(userData) {
    try {
        const pool = await getPool();
        const query = 'INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *';
        const values = [userData.name, userData.email, userData.password];
        const result = await pool.query(query, values);
        return result.rows[0];
    } catch (error) {
        console.error('Error creating user:', error);
        throw error;
    }
}

