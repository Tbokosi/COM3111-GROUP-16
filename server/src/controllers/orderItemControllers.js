const asyncHandler = require("express-async-handler");
const {orderItemControllers} = require("../queries/orderItemQueries");
const AppError = require("../utils/AppError");

const createOrderItem = asyncHandler = async (req, res, next)=>{
    const orderItem = await createOrderItem(req.body);
    if (!orderItem){
        return next(new AppError("No orderItem available"))
    }
    res.status(200).json({
        status : "success",
        data : odrderItem,
});
}
const getAllOrderItems = asyncHandler = async (req, res, next) => {
    const orderItems = await orderItemControllers.getAllOrderItems();
    if (!orderItems) {
        return next(new AppError("No order items found", 404));
    }
    res.status(200).json({
        status: "success",
        data: orderItems,
    });
};

const getOrderItemById = asyncHandler = async (req, res, next) => {
    const {id} = parseInt(req.params.orderItemById);
    const orderItem = await getOrderItemById(id);
    if (!orderItem)
        return next(new AppError("No order item found", 404))

    res.status(200).json({
        status:"success",
        data: orderItem,
    });
    };

const getOrderItemsForUser = asyncHandler = async (req, res, next) =>{
    const id = parseInt(req.params.userID);
    const OrderItemsForUser= await getOrderItemsForUser(id);
    if (!OrderItemsForUser){
        return next(new AppError("No order with the specified user id", 404))
    }

    res.status(200).json({
        statius: "success",
        data: orderItemsForUser,
    });
};

module.export ={createOrderItem, getAllOrderItems, getOrderItemById, getOrderItemsForUser}