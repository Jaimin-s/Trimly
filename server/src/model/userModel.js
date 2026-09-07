const pool = require('../config/db')

// read operations 
const findUserByEmail = async (email) => {
    const user = await pool.query("SELECT FROM users WHERE email = $1", [email]);
    return user.rows[0]
}

const findUserById = async (id) => {
    const user = await pool.query('SELECT FROM users WHERE id=$1',[id]);
    return user.rows[0]
}

const findAllUsers = async () => {
    const users = await pool.query("SELECT * FROM users");
    return users.rows;
}

// write operations 
const createUser = async(name, email, password, role='client') => {
    try {
        const query = "INSERT INTO users (name, email, password, role) VALUES ($1, $2, $3, $4) RETURNING *"
        const { rows } = await pool.query(query, [name, email, password, role])
        return rows[0]
    } catch (error) {
        console.error("Something went wrong: ", error)
        throw error;
    }
}

const deleteUser = async (id) => {
    try {
        const query = 'DELETE FROM users WHERE id =$1'
        const { rows } = await pool.query(query,[id])
        return rows[0]
    } catch (error) {
        console.error("Failed to delete user cause: ", error)
        throw error;
    }
}

const updateUser = async (id, name, email, role) => {
    try {
        const {rows} = await pool.query('UPDATE users SET name = $1, email = $2, role = $3 WHERE id = $4 RETURNING id, name, email, role, created_at', [name, email, role, id])
        return rows[0];
    } catch (error) {
        console.error("Error updating user in database:", error);
        throw error;
    }
}

module.exports = {
    findUserByEmail,
    findUserById,
    findAllUsers,
    createUser,
    deleteUser,
    updateUser
}