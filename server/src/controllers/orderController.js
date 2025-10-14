const asyncHandler = require("express-async-handler");
const { createOrder, getAllOrders, getOrderForUser, getOrderById, deleteOrder } = require("../queries/orderQueries");
const AppError = require("../utils/AppError");

const createOrderController = asyncHandler(async(req,res, next)=>{
    const order = await createOrder(req.body);

    if(!order){
        return next (new AppError("Failed to create order", 500))
    }

    res.status(200).json({
        status: "success",
        data:order
    })
})

const getAllOrdersController = asyncHandler(async(req, res, next)=>{
    const orders = await getAllOrders();

    if(!orders){
        return next(new AppError("Failed to fetch orders"), 500)
    }

    res.status(200).json({
        status: "success",
        data:orders
    })
})

const getOrdersForUserController = asyncHandler(async(req, res, next)=>{
    const userID = parseInt(req.params.userID);
    const orders = await getOrderForUser(userID);

    if(!orders){
        return next(new AppError("Failed to get orders"), 500)
    }

    res.status(200).json({
        status: "success",
        data:orders
    })
})

const getOrderByIdController = asyncHandler(async(req, res, next)=>{
    const orderID = parseInt(req.params.orderID);
    const order = await getOrderById(orderID);

    if(!order){
        return next(new AppError("Failed to fetch order"), 500)
    }

    res.status(200).json({
        status: "success",
        data: order
    })

})

const deletOrderController = asyncHandler(async(req, res, next)=>{
    const orderID = parseInt(req.params.orderID);
    const order = await deleteOrder(orderID);

    if(!order){
        return next(new AppError("Failed to delete order"), 500)
    }

    res.status(200).json({
        status: "success",
        data:order
    })
})

module.exports = {
    deletOrderController,getOrderByIdController, getAllOrdersController,getOrdersForUserController,createOrderController
}