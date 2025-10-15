const express = require ("express");
const { createOrderItemController, getAllOrderItemsController, getOrderItemsForUserController} = require("../controllers/orderItemsController");

const orderItemRoute = express.Router();

orderItemRoute.post("/", createOrderItemController);
orderItemRoute.get("/", getAllOrderItemsController);
orderItemRoute.get("/", getOrderItemsForUserController);

module.exports = orderItemRoute;

