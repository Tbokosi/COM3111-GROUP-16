require("dotenv").config()
const express = require("express");
const userRoute = require("./routes/userRoutes");
const AppError = require("./utils/AppError");
const errorHandler = require("./controllers/errorController");
const cartRoutes = require("./routes/cartRoutes");
const orderRoutes = require("./routes/orderRoutes");
const productRoute = require("./routes/productRoute");
const cors = require ("cors");
const morgan = require("morgan");
const passport = require ("./utils/passport")
const cookieParser = require("cookie-parser");
const authRoute = require("./routes/authRoute");
const paymentRoutes = require("./routes/payments");


const app = express();


const PORT = process.env.PORT || 3000;
app.use(passport.initialize());
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"))

app.use("/api/auth", authRoute)
app.use("/api/users", userRoute);
app.use("/api/cart", cartRoutes);
app.use("/api/orders", orderRoutes)
app.use("/api/products", productRoute)
app.use("/api/payments", paymentRoutes)
app.use((req,res, next)=>{
    next (new AppError("Requested route not found", 404))
})
app.use(errorHandler)
app.listen(PORT, '0.0.0.0', ()=>{
    console.log("listenong on port: " + PORT);
})