const express = require("express");
const { getUserByIdController, createUserController, getAllUsersController } = require("../controllers/userController");
const { getOrdersForUserController } = require("../controllers/orderController");
const { getCartItemsForUserController } = require("../controllers/cartItemsController");

const userRoute = express.Router();

userRoute.get("/", getAllUsersController);
userRoute.get("/:userID", getUserByIdController);
userRoute.post("/register",createUserController );
userRoute.get("/:userID/orders",getOrdersForUserController);
userRoute.get("/:userID/cart", getCartItemsForUserController);

module.exports = userRoute;

