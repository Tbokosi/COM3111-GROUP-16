const axios = require("axios");
const asyncHandler = require("express-async-handler");
const { getUserById } = require("../queries/userQueries");
const { updateOrderStatus } = require("../queries/orderQueries");
const AppError = require("../utils/AppError");

// Initialize payment and return reference link
const initializePayment = asyncHandler(async (req, res, next) => {
  const { amount,userID, currency = "MWK", items } = req.body;
const user = await getUserById(userID);


  if (!user) {
    return next(new AppError("User not found", 404));
  }

  try {
    const response = await axios.post(
      "https://api.paychangu.com/checkout/initialize",
      {
        amount,
        currency,
        tx_ref: `TXN-${Date.now()}`,
        email: user.email,
        phone: user.phone,
        items,
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.PAYCHANGU_SECRET_KEY}`,
        },
      }
    );

    const { data } = response.data;

    res.status(200).json({
      status: "success",
      paymentLink: data.payment_url,
    });
  } catch (error) {
    next(new AppError("Failed to initialize payment", 500));
  }
});

// Handle webhook from PayChangu
const handleWebhook = asyncHandler(async (req, res, next) => {
  const { event_type, data } = req.body;

  if (event_type !== "checkout.payment") {
    return res.status(400).json({ status: "ignored" });
  }

  const { tx_ref, status } = data;

  try {
    // Verify payment with PayChangu
    const verifyResponse = await axios.get(
      `https://api.paychangu.com/verify-payment/${tx_ref}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.PAYCHANGU_SECRET_KEY}`,
        },
      }
    );

    const { status: paymentStatus } = verifyResponse.data;

    if (paymentStatus === "success") {
      // Update order status in DB
      await updateOrderStatus(tx_ref, "paid");
      res.status(200).json({ status: "success" });
    } else {
      await updateOrderStatus(tx_ref, "failed");
      res.status(200).json({ status: "failed" });
    }
  } catch (error) {
    next(new AppError("Payment verification failed", 500));
  }
});

module.exports = { initializePayment, handleWebhook };
