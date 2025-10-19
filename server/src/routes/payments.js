const express = require("express");
const { testPayment } = require("../controllers/paymentController");

const paymentRoutes = express.Router();

paymentRoutes.use("/", testPayment);

module.exports = paymentRoutes;