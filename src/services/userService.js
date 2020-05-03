const User = require('../models/users');

const findUser = async (param) => {
    try {
      const data = await User.findOne(param);
      return data;
    } catch (error) {
      throw error;
    }
  };
  module.exports = { createUser, findUser };