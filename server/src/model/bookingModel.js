const pool = require('../config/db');

// Create booking
const createBooking = async (name, email, phone, visit_date, visit_time, special_note) => {
    try {
        // Note: Using "special_note" as the database column name (standard SQL snake_case)
        const query = `
            INSERT INTO bookings (name, email, phone, visit_date, visit_time, special_note) 
            VALUES ($1, $2, $3, $4, $5, $6) 
            RETURNING *
        `; 
        const values = [name, email, phone, visit_date, visit_time, special_note];
        const newBooking = await pool.query(query, values);
        
        // Return data back to controller
        return newBooking.rows[0];
    } catch (error) {
        console.error("Booking failure in DB model:", error.message);
        throw error;
    }
};

// Cancel booking / delete booking
const deleteBooking = async (id) => {
    try {
        const query = "DELETE FROM bookings WHERE id = $1 RETURNING *";
        const result = await pool.query(query, [id]); // Wrapped id in array

        return result.rows[0];
    } catch (error) {
        console.error("Failed to delete booking in DB model:", error.message);
        throw error;   
    }
};

module.exports = { createBooking, deleteBooking };