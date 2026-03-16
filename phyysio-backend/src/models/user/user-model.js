import getPool from "../../database/database.js";

async function createUser(userData) {
    try {
        const pool = await getPool();
        const query = 'INSERT INTO users (cpf, name, email, password) VALUES ($1, $2, $3, $4) RETURNING *';
        const values = [userData.cpf, userData.name, userData.email, userData.password];
        const result = await pool.query(query, values);
        return result.rows[0];
    } catch (error) {
        console.error('Error creating user:', error);
        throw error;
    }
}



export default {
    createUser,
    getUserByEmail,
};
