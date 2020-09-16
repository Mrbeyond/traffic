"use strict";
/** The user controller for authentification is imported */
const userController = require('../controllers/userController');
/** The user middleWare for authentifiaction is imported here */
const authMiddleWare = require('../middlewares/auth')

const router = require('express').Router();


/** Router implementation begins here */
router.post('/signup',authMiddleWare.filterUserSignupAndUpdate, userController.creatUser);
router.post('/login', authMiddleWare.filterLogin, userController.login);
router.post('/logout', authMiddleWare.confirmToken, userController.logOut)

module.exports = router;