const express = require('express');
const Users = require('../controllers/userController');
const router = express.Router();
router.route('/signup').post(Users.createUser);
router.route('/signin').post(Users.signin);
router.route('/tutors').get(Users.findTutors);
module.exports = router;