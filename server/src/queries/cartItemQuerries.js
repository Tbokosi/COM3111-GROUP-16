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

const getCartItemForUser = (userID) => {
  return prisma.cartItem.findMany({
    where: { userID: parseInt(userID, 10) },
    include: { product: true }, // optional, include product info
  });
};


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