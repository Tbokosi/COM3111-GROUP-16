const prisma = require ("../config/client");

const createOrderItem = data =>{
    return prisma.orderItem.create({
        data
    })
}

const getOrderItemById = id =>{
    return prisma.orderItem.findUnique({
        where:{
            ID:id
        }
    })
}

const getAllOrderItems = ()=>{
    return prisma.orderItem.findMany()
}

const deleteOrderItem = id =>{
    return prisma.orderItem.delete({
        where:{
            ID:id
        }
    })
}
 const getOrderItemsForUser = id =>{
     return prisma.orderItem.findUnique({
         where:{
             userID: id
         }
     })
 }

module.exports = {
    createOrderItem,
    getOrderItemById,
    getAllOrderItems,
    deleteOrderItem
}