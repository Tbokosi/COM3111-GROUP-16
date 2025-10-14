const errorHandler = (err, req, res, next)=>{
    const statusCode = err.statusCode || 500;
    const status = err.status || "Error";

    if(err.isOperational){
        res.status(statusCode).json({
            status,
            message: err.message
        })
    }
    else{
        console.error(err);
        res.status(statusCode).json({
            status,
            message:"Something went wrong"
        })
    }
}

module.exports = errorHandler