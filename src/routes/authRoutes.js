const express = require('express');
const Users = require('../controllers/userController');
const router = express.Router();
router.route('/signup').post(Users.createUser);
module.exports = router;