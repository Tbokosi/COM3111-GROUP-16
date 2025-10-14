const asyncHandler = require ("express-async-handler");

const createProductController = asyncHandler(async(req, res, next)=>{

})
const getProductByIdController = asyncHandler(async(req, res, next)=>{

})

const getAllProductsController = asyncHandler(async(req, res, next)=>{

})
const getProductByCategoryIdController = asyncHandler(async(req, res, next)=>{

})

module.exports = {createProductController, getProductByCategoryIdController, getAllProductsController, getProductByIdController}