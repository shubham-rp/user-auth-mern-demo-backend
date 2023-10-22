const express = require("express");
const {
  loginUser,
  signupUser,
  getUserData,
} = require("../controllers/users.controller");
const { userRoutes } = require("../constants/");
const requireAuth = require("../middleware/requireAuth");

const userRouter = express.Router({ mergeParams: true });

// login route

userRouter.post(userRoutes.LOGIN_USER, loginUser);

// signup route

userRouter.post(userRoutes.SIGNUP_USER, signupUser);

// fetch user data route

// require auth for getting user data
userRouter.use(requireAuth);

userRouter.get(userRoutes.GET_USER, getUserData);

module.exports = userRouter;
