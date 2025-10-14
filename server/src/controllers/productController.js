const asyncHandler = require ("express-async-handler");
const { createProduct, getProductById, getAllProducts, getProductByCategoryId } = require("../queries/productQueries");
const AppError = require("../utils/AppError");

const createProductController = asyncHandler(async(req, res, next)=>{
const product = await createProduct(req.body);

if(!product){
    return next(new AppError("Failed to create product", 500))
}
res.status(200).json({
    status: "success",
    data: product
})
})


const getProductByIdController = asyncHandler(async(req, res, next)=>{
    const productID = parseInt(req.params.productID);
    const product = await getProductById(productID);

    if(!product){
        return next(new AppError("Product not found", 404))
    }

    res.status(200).json({
        status: "success",
        data:product
    })

})

const getAllProductsController = asyncHandler(async(req, res, next)=>{
    const products = await getAllProducts();

    if(!products){
        return next(new AppError("Failed to fetch products", 500))
    }

    res.status(200).json({
        status: "success",
        data:products
    })

})
const getProductByCategoryIdController = asyncHandler(async(req, res, next)=>{
    const categoryID = parseInt(req.params.categoryID);
    const products = await getProductByCategoryId(categoryID);

    if(!products){
        return next(new AppError("Failed to fetch products", 500))
    }

    res.status(200).json({
        status: "success",
        data:products
    })
})

module.exports = {createProductController, getProductByCategoryIdController, getAllProductsController, getProductByIdController}