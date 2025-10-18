const express = require("express");
const userRoute = require("./routes/userRoutes");
const AppError = require("./utils/AppError");
const errorHandler = require("./controllers/errorController");
const cartRoutes = require("./routes/cartRoutes");
const orderRoutes = require("./routes/orderRoutes");
const productRoute = require("./routes/productRoute");
const cors = require ("cors")


const app = express();


const PORT = process.env.PORT || 3000;
app.use(express.json());
app.use(cors())

app.use(express.urlencoded({ extended: true }));

app.get("/api", (req, res)=>{
    res.send("Listening on port: " +   PORT)
})

app.use("/api/users", userRoute);
app.use("/api/cart", cartRoutes);
app.use("/api/orders", orderRoutes)
app.use("/api/products", productRoute)
app.use((req,res, next)=>{
    next (new AppError("Requested route not found", 404))
})
app.use(errorHandler)
app.listen(PORT, '0.0.0.0', ()=>{
    console.log("listenong on port: " + PORT);
})