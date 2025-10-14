const express = require("express");
const { getUserByIdController, createUserController, getAllUsersController } = require("../controllers/userController");

const userRoute = express.Router();

userRoute.get("/", getAllUsersController);
userRoute.get("/:userID", getUserByIdController);
userRoute.post("/register",createUserController );

module.exports = userRoute;

