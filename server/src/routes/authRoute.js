const express = require("express");
const passport = require("../utils/passport");
const jwt = require("jsonwebtoken");
const { getUser } = require("../queries/userQueries");
const {
  signUpController,
  loginController,
} = require("../controllers/authControllers");
const AppError = require("../utils/AppError");

const authRoute = express.Router();
authRoute.get("/", (req, res, next) => res.send("Auth route"));
authRoute.post("/signUp", signUpController);
authRoute.post("/login", loginController);
authRoute.post("/refresh", async (req, res, next) => {
  if (!req.cookies?.jwt) {
    return next(new AppError("Cookie for refresh not found", 404));
  }

  const refreshToken = req.cookies.jwt;

  try {
    // Wrap the callback-based jwt.verify in a Promise for async/await
    const decoded = await new Promise((resolve, reject) => {
      jwt.verify(
        refreshToken,
        process.env.JWT_REFRESH_SECRET,
        (err, decoded) => {
          if (err) {
            return reject(err); // Reject the promise on error
          }
          resolve(decoded); // Resolve the promise on success
        }
      );
    });

    const user = await getUser(decoded.id);
    const payLoad = { id: user.id, email: user.email };
    const accessToken = jwt.sign(payLoad, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res.status(200).json({ status: "success", data: { accessToken, user } });
  } catch (err) {
    // This try/catch now correctly handles all errors,
    // whether from jwt.verify or getUser
    return res.status(401).json({
      message: "Unauthorized",
    });
  }
});
module.exports = authRoute;
