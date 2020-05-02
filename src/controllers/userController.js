const userService = require('../services/userService');
const createUser = async (req, res, next) => {
  const user = req.body;
  try {
    const data = await userService.createUser(user);
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