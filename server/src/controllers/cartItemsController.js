const asyncHandler = require("express-async-handler");
const { createCartItem, getAllCartItems, getCartItemById, getCartItemForUser } = require("../queries/cartItemQuerries");
const AppError = require("../utils/AppError");

const createCaltItemController = asyncHandler(async(req, res, next)=>{
    const cartItem = await createCartItem(req.body);
    if(!cartItem){
        return next(new AppError("Failed to add item to cart", 500))
    }

    res.status(200).json({
        status: "success",
        data:cartItem
    })
})

const getAllCartItemsCOntroller = asyncHandler(async(req, res, next)=>{
    const cartItems = await getAllCartItems();

    if(!cartItems){
        return next(new AppError("Failed to fetch cart items", 500))
    }

    res.status(200).json({
        status:"success",
        data:cartItems
    })
})

const getCartItemByIDController = asyncHandler(async(req, res, next)=>{
const cartItemID = parseInt(req.params.cartItemID);
const cartItem = await getCartItemById(cartItemID);

if(!cartItem){
    return next(new AppError("Failed to fetch cart item", 500))
}
res.status(200).json({
    status:"success",
    data: cartItem
})
})

const getCartItemsForUserController = asyncHandler(async(req, res, next)=>{
    const userID = parseInt(req.params.userID);
    const cartItems =  await getCartItemForUser(userID);

    if(!cartItems){
        return next(new AppError("Failed to fetch cart items", 500))
    }

    res.status(200).json({
        status: "success",
        data: cartItems
    })
})

module.exports = {
    createCaltItemController, getAllCartItemsCOntroller, getCartItemsForUserController, getCartItemByIDController
}