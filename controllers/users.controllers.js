const User = require("../models/users.model");

const jwt = require("jsonwebtoken");

const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.SECRET, { expiresIn: "3d" });
};

// login user

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.login(email, password);

    const token = createToken(user._id);

    res.status(200).json({ email, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// signup user

const signupUser = async (req, res) => {
  const { email, name, password } = req.body;

  try {
    const user = await User.signup(email, name, password);

    // create a token
    // this is for signing in directly after signing up. in future if sign in not required token should not be sent.
    // const token = createToken(user._id);

    res.status(200).json({ email });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getUserData = async (req, res) => {
  const user_id = req.user._id;

  res.status(200).json(user.userData);
};

module.exports = { loginUser, signupUser, getUserData };
