
const asyncHandler = require("express-async-handler");
const Paychangu = require ("paychangu");



const paychangu = new Paychangu({
  secretKey: process.env.PAYCHANGU_SECRET_KEY,
});


const createPaymentController = asyncHandler(async(req, res, next)=>{

})

const getPaymentByIdController = asyncHandler(async(req, res, next)=>{

})

const getAllPaymentsController = asyncHandler(async(req, res, next)=>{
    
})



const testPayment = asyncHandler(async (req, res) => {
  try {
    const response = await paychangu.initiateTransaction({
      amount: 1000,
      currency: 'MWK',
      tx_ref: `ref-${Date.now()}`,
      first_name: 'Titus',
      last_name: 'Bokosi',
      email: 'titus@example.com',
      callback_url: 'https://yourapp.com/payment-callback',
      return_url: 'https://yourapp.com/payment-success',
      customization: {
        title: 'Purchase Example',
        description: 'Testing payment integration',
      },
    });

    console.log(response.data);
    res.json(response.data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Payment initialization failed' });
  }
});

module.exports = {testPayment}