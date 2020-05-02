const userService = require('../services/userService');
const createUser = async (req, res, next) => {
  const user = new User(req.body);
  try {
    const data = await UserService.createUser(user);
    return res.status(200).json({
      status: 200,
      message: 'User has been created successfully',
      data,
    });
  } catch (err) {
    return next(err);
  }
};
module.exports = {
  createUser
};