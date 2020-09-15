"use strict";

const userController = require('../controllers/userController');
const authMiddleWare = require('../middlewares/auth')

const router = require('express').Router();

router.post('/signup',authMiddleWare.filterUserSignupAndUpdate, userController.creatUser);


module.exports = router;