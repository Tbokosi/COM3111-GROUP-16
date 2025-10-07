const prisma = require ("../config/client")


const createCartItem = (cartItemData)=>{
    return prisma.cartItem.create({
        data:cartItemData
    })
}

const getCartItemById = (id)=>{
    return prisma.cartItem.findUnique({
        where:{
            ID:id
        }
    })
}

const getAllCartItems = ()=>{
    return prisma.cartItem.findMany()
}

const getCartItemForUser = (id)=>{
    return prisma.cartItem.findUnique({
        where:{
            userID: id
        }
    })
}

const deleteCartItem = id =>{
    return prisma.cartItem.delete({
        where:{
            ID:id
        }
    })
}

module.exports = {
    createCartItem,
    getAllCartItems,
    getCartItemById,
    getCartItemForUser
}