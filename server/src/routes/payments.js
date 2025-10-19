const express = require("express");
const passport = require("../utils/passport");
const { initializePayment, handleWebhook } = require("../controllers/paymentController");

const paymentRoutes = express.Router();

// Authenticated route for initializing payment
paymentRoutes.post("/create-payment-link",  initializePayment);

// Webhook endpoint (no auth, but you should verify signature)
paymentRoutes.post("/webhook", handleWebhook);

module.exports = paymentRoutes;
