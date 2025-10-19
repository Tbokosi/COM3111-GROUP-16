const asyncHandler = require("express-async-handler");
const passport = require("passport");
const bcrypt = require("bcryptjs");
const { getUserByEmail, createUser, getUser } = require("../queries/userQueries");
const AppError = require("../utils/AppError");
const jwt = require("jsonwebtoken");

const signUpController = asyncHandler(async (req, res, next) => {
  const user = await getUserByEmail(req.body.email);
  if (user) {
    return next(new AppError("Email already exist", 409));
  }
  const hashedPassword = await bcrypt.hash(req.body.password, 10);
  const newUser = await createUser({ ...req.body, password: hashedPassword });
  res.status(201).json({
    status: "Success",
    data: newUser,
  });
});

const loginController = asyncHandler(async (req, res, next) => {
  if (!req.body.email || !req.body.password) {
    return res.status(400).json({
      status: "Fail",
      message: "Email and password are required",
    });
  }
  passport.authenticate("local", { session: false }, (err, user, inf) => {
    if (err || !user) {
      return res.status(400).json({
        status: "Fail",
        message: inf ? inf.message : "Failed login",
        err,
        user
      });
    }
    const payLoad = { id: user.ID, email: user.email };
    const accessToken = jwt.sign(payLoad, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    const refreshToken = jwt.sign(payLoad, process.env.JWT_REFRESH_SECRET, {
      expiresIn: "7d",
    });

    res.cookie("jwt", refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "Strict",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    return res.status(200).json({ accessToken, user });
  })(req, res, next);
});

module.exports = {
  signUpController,
  loginController,
};
