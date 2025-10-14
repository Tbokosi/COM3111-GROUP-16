const express = require("express");
const { getAllOrdersController, createOrderController, getOrderByIdController, deletOrderController } = require("../controllers/orderController");

const orderRoutes = express.Router();

orderRoutes.get("/", getAllOrdersController);
orderRoutes.post("/", createOrderController);
orderRoutes.get("/:orderID", getOrderByIdController);
orderRoutes.delete("/:orderID", deletOrderController);

module.exports = orderRoutes