const bookingModel = require('../model/bookingModel');

const NewBooking = async (req, res) => {
    const { name, email, phone, visit_date, visit_time, special_note } = req.body;

    try {
        // CALL the model function and pass the argument data
        const newbooking = await bookingModel.createBooking(
            name, email, phone, visit_date, visit_time, special_note 
        );

        if (!newbooking) {
            return res.status(400).json({
                message: "Failed to create new booking."
            });
        }

        return res.status(201).json({
            message: "New Booking successful",
            booking: newbooking
        });

    } catch (error) {
        console.error("Failed to create new booking:", error.message);
        return res.status(500).json({
            message: "Server Error",
            error: error.message
        });
    }
};

const CancleBooking = async (req, res) => {
    try {
        const { id } = req.params; // or req.params depending on route definition
        const canceledbooking = await bookingModel.deleteBooking(id);

        if (!canceledbooking) {
            return res.status(400).json({ message: "Failed to cancel booking" });
        }

        return res.status(200).json({ message: `Cancelled successfully with id ${id}.` });
    } catch (error) {
        return res.status(500).json({
            message: "Server Error",
            error: error.message
        });
    }
};

module.exports = { NewBooking, CancleBooking };