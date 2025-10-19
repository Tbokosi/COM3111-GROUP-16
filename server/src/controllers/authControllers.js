const asyncHandler = require("express-async-handler");
const passport = require("passport");
const bcrypt = require("bcryptjs");
const { getUserByEmail, createUser, getUserById } = require("../queries/userQueries");
const AppError = require("../utils/AppError");
const jwt = require("jsonwebtoken");

// SIGNUP
const signUpController = asyncHandler(async (req, res, next) => {
  const { email, password, userName, userType } = req.body;

  if (!email || !password || !userName) {
    return next(new AppError("Email, password, and username are required", 400));
  }

  const existingUser = await getUserByEmail(email);
  if (existingUser) {
    return next(new AppError("Email already exists", 409));
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = await createUser({ email, userName, password: hashedPassword, userType: userType || "user" });

  res.status(201).json({
    status: "Success",
    data: {
      ID: newUser.ID,
      email: newUser.email,
      userName: newUser.userName,
      userType: newUser.userType,
      createdAt: newUser.createdAt,
    },
  });
});

// LOGIN
const loginController = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      status: "Fail",
      message: "Email and password are required",
    });
  }

  try {
    const user = await new Promise((resolve, reject) => {
      passport.authenticate("local", { session: false }, (err, user, info) => {
        if (err) return reject(err);
        if (!user) return reject(info ? new AppError(info.message, 400) : new AppError("Login failed", 400));
        resolve(user);
      })(req, res, next);
    });

    const payload = { id: user.ID, email: user.email, userName: user.userName };
    const accessToken = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "1h" });
    const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_SECRET, { expiresIn: "7d" });

    res.cookie("jwt", refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "Strict",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    res.status(200).json({
      status: "Success",
      user: {
        ID: user.ID,
        email: user.email,
        userName: user.userName,
        userType: user.userType,
      },
      accessToken,
    });

  } catch (err) {
    next(err);
  }
});

module.exports = {
  signUpController,
  loginController,
};
