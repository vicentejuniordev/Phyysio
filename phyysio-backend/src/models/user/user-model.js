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

async function getUserByCpf(cpf) {
    try {
        const pool = await getPool();
        const query = 'SELECT * FROM users WHERE cpf = $1';
        const values = [cpf];
        const result = await pool.query(query, values);
        return result.rows[0];
    } catch (error) {
        console.error('Error fetching user by CPF:', error);
        throw error;
    }
}   

async function updateUser(cpf, userData) {
    try {
        const pool = await getPool();
        const query = 'UPDATE users SET name = $1, email = $2, password = $3 WHERE cpf = $4 RETURNING *';
        const values = [userData.name, userData.email, userData.password, cpf];
        const result = await pool.query(query, values);
        return result.rows[0];
    } catch (error) {
        console.error('Error updating user:', error);
        throw error;
    }
}



export default {
    createUser,
    getUserByCpf,
    updateUser
};
