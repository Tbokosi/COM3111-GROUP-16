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
const getUserByEmail = (email) => {
  return prisma.user.findUnique({
    where: { email },
  });
};

module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    getUserByEmail
}