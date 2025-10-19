const express = require("express");
const {
  getAllCartItemsController,
  createCartItemController,
  getCartItemByIDController,
  getCartItemsForUserController,
} = require("../controllers/cartItemsController");

const cartRoutes = express.Router();

// Get all cart items (admin use or debug)
cartRoutes.get("/", getAllCartItemsController);

// Add a new cart item
cartRoutes.post("/", createCartItemController);

// 🔹 Get all cart items for a given user
cartRoutes.get("/user/:userID", getCartItemsForUserController);

// 🔹 Get a specific cart item by its cart ID
cartRoutes.get("/item/:cartItemID", getCartItemByIDController);

module.exports = cartRoutes;
