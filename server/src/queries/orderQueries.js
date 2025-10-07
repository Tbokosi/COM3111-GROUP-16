const prisma = require ("../config/client");

const createOrder = orderData =>{
    return prisma.order.create({
        data:orderData
    })
}

const getAllOrders = ()=>{
    return prisma.order.findMany()
}

const getOrderById = id =>{
    return prisma.order.findUnique({
        where:{
            ID:id
        }
    })
}

const getOrderForUser = id => {
    return prisma.order.findUnique({
        where:{
            ID:id
        }
    })
}

const deleteOrder = id => {
    return prisma.order.delete({
        where:{
            ID:id
        }
    })
}


module.exports = {
    createOrder,
    getAllOrders,
    getOrderById,
    getOrderForUser,
    deleteOrder
}