const prisma = require("../config/client")

const getAllProducts = ()=>{
    return prisma.product.findMany()
}

const getProductById = (id) => {
    return prisma.product.findUnique({
        where:{
            ID:id
        }
    })
}

const createProduct = (productData)=>{
    return prisma.product.create({
        data:productData
    })
}
const getProductByCategoryId = (id) =>{
    return prisma.product.findUnique({
        where:{
            categoryID: id
        }
    })
}

module.exports = {
    getAllProducts,
    getProductByCategoryId,
    createProduct,
    getProductById
}