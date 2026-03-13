import getPool from "../database/database.js";

async function createAdmin(adminData){
    try {
        const pool = await getPool();
        const query = 'INSERT INTO admins (name, email, password) VALUES ($1, $2, $3) RETURNING *';
        const values = [adminData.name, adminData.email, adminData.password];
        const result = await pool.query(query, values);
        return result.rows[0];
    } catch (error) {
        console.error('Error creating admin:', error);
        throw error;
    }   
}

function updateAdmin(){

}

function deleteAdmin(){

}


export default {
    createAdmin,
    updateAdmin,
    deleteAdmin
};

