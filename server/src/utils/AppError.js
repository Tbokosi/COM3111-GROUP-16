

class AppError extends Error{
    constructor(message, statusCode = 500){
    super(message)
    this.statusCode = statusCode;
    this.status = `${this.statusCode}`.startsWith("4") ? "Fail" : "Error";
    this.message = message;
    this.isOperational = true;
    Error.captureStackTrace(this, this.constructor);
    }
}

module.exports = AppError