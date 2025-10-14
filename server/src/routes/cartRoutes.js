const express = require("express");
const { getAllCartItemsController, createCartItemController, getCartItemByIDController } = require("../controllers/cartItemsController");

const cartRoutes = express.Router();

cartRoutes.get("/", getAllCartItemsController);
cartRoutes.post("/", createCartItemController);
cartRoutes.get("/:cartID", getCartItemByIDController);

module.exports = cartRoutes