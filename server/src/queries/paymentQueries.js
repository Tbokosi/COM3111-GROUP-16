const prisma = require ("../config/client");

const createPayment = paymentData =>{
    return prisma.payment.create({
        data:paymentData
    })
}

const getPaymentById = id => {
    return prisma.payment.findUnique({
        where:{
            ID: id
        }
    })
}

const getAllPayments = ()=>{
    return prisma.payment.findMany()
}


module.exports = {
    createPayment,
    getAllPayments,
    getPaymentById
}