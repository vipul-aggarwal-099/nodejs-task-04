const User = require('../models/users');
const createUser = async (user) => {
  try {
    const data = await User.create(user);
    return data;
  } catch (error) {
    throw error;
  }
};
const findUser = async (param) => {
  try {
    const data = await User.findOne(param);
    return data;
  } catch (error) {
    throw error;
  }
};

const findUsers = async (param = null) => {
  try {
    const data = await User.find(param);
    return data;
  } catch (error) {
    throw error;
  }
};
module.exports = { createUser, findUser, findUsers };