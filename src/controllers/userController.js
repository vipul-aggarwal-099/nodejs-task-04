const userService = require('../services/userService');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const createUser = async (req, res, next) => {
  const user = req.body;
  try {
    const userExist = await userService.findUser({
      email: user.email,
    });
    if (userExist) {
      return res.json({
        status: 401,
        message: 'Email already exists',
      });
    }
    const hashed = await bcrypt.hash(user.password, 10);
    user.password = hashed;
    await userService.createUser(user);
    delete user.password;
    return res.json({
      status: 200,
      message: 'User has been created successfully',
      user,
    });
  } catch (err) {
    return next(err);
  }
};
const signin = async (req, res, next) => {
  try {
    let data = {};
    const { email, password } = req.body;
    const user = await userService.findUser({ email: email });
    if (!user) {
      return res.json({
        status: 401,
        message: 'User does not exist',
      });
    }
    const match = bcrypt.compare(password, user.password);
    if (!match) {
      return res.json({
        status: 401,
        message: 'Incorrect password',
      });
    }
    data._id = user._id;
    data.username = user.username;
    data.email = user.email;
    data.role = user.role;
    data.active = user.active;
    const token = jwt.sign(data, data.secret || process.env.TOKEN_SECRET, {
      expiresIn: '24hr',
    });
    data.token = token;
    return res.json({
      status: 200,
      message: 'User signed in successfully',
      data,
    });
  } catch (error) {
    return next(error);
  }
};
module.exports = {
  createUser,
  signin,
};