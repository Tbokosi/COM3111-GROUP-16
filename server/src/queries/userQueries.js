const prisma = require ("../config/client");

const getAllUsers = ()=>{
    return prisma.user.findMany()
}

const getUserById = (id)=>{
    return prisma.user.findUnique({
        where:{
            ID:id
        },
    })
}

const createUser = (userData) => {
    return prisma.user.create({
        data:userData
    })
}

module.exports = {
    getAllUsers,
    getUserById,
    createUser,
}