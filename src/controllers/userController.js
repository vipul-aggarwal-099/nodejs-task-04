const userService = require('../services/userService');
const signin = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await userService.findUser({ email: email });
    if (!user) {
      return res.json({
        status: 401,
        message: 'User does not exist',
      });
    }
    if (password != user.password) {
      return res.json({
        status: 401,
        message: 'Incorrect password',
      });
    }
    return res.json({
      status: 200,
      message: 'User signed in successfully',
      user,
    });
  } catch (error) {
    return next(error);
  }
};
module.exports = {
  createUser,
  signin,
};