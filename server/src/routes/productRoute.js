const express = require("express");
const { getAllProductsController, createProductController, getProductByIdController, getProductByCategoryIdController } = require("../controllers/productController");

const productRoute = express.Router();

productRoute.get("/", getAllProductsController);
productRoute.post("/", createProductController);
productRoute.get("/:productID", getProductByIdController);
productRoute.get("/:productCategoryID", getProductByCategoryIdController);

module.exports = productRoute;