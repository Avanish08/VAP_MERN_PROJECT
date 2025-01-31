const express = require("express");
const paymentController = require("../Controllers/paymentController");

const router = express.Router();

// Route to create a new payment
router.post("/create-payment", paymentController.createPayment);

// Route to verify payment
router.post("/verify-payment", paymentController.verifyPayment);

// Route to simulate payment verification
router.post("/simulate-payment", paymentController.simulatePayment);

module.exports = router;
