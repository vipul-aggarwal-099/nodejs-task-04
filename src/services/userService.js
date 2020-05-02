const User = require('../models/users');

const createUser = async (user) => {
    // static async createUser(user) {
        try {
            const data = await User.create(user);

            return data;
        } catch (error) {
            throw error;
        }
    };

module.exports = { createUser };    