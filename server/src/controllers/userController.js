const asyncHandler = require ("express-async-handler");
const bcrypt = require("bcryptjs");
const { createUser, getAllUsers, getUserById } = require("../queries/userQueries");
const AppError = require("../utils/AppError");

const createUserController = asyncHandler(async(req, res, next)=>{
const hashedPassword = await bcrypt.hash(req.body.passwordHash, 10);
const user = await createUser({...req.body,passwordHash:hashedPassword });

if(!user){
    return next (new AppError("Failed to create user", 500))
}
res.status(200).json({
    status: "success",
    data: user
})
})

const getAllUsersController = asyncHandler(async(req, res, next)=>{
    const users = await getAllUsers();
    if(!users){
        return next(new AppError("Failed to fetch users", 500));
    }
    
res.status(200).json({
    status: "success",
    data: users
})
})

const getUserByIdController = asyncHandler(async(req, res, next)=>{
    
    const userID = parseInt(req.params.userID);
    const user = await getUserById(userID);

    if(!user){
        return next (new AppError("No user found", 404))
    };

    res.status(200).json({
        status: "success",
        data:user
    })
})

module.exports = {createUserController, getAllUsersController, getUserByIdController}