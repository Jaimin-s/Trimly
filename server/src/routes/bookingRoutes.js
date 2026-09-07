const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/auth');
const bookingController = require('../controllers/bookingController');

router.post('/newbooking', bookingController.NewBooking);
router.delete('/cancelbooking/:id', bookingController.CancleBooking);

module.exports = router;