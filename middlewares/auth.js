"use strict";
const validator = require('./../validators/validators');
const commonMethods = require('./../controllers/commonMethods');
const {user} = require('./../models/index');
const {verify} = require('jsonwebtoken');
require('dotenv').config();

const key = process.env.accesskey;


const userMiddleWare ={
  /** This is the middleware for user sign up and update */
  filterUserSignupAndUpdate: async(req, res, next)=>{
    try {

      /** confirm the payload here */
      let check = await validator.testUser(req.body);
      if(!check) return commonMethods.errorReturn(res, 'Intruder');
      const User = await user.exists({$or: [{email: req.body.email}, {phone:req.body.phone}]});
      if(User) return commonMethods.errorReturn(res, "User exists");
      next();
    } catch (e) {
      console.log(e, 'midman')

      /** return 500 error */
      return commonMethods.serverErrorReturn(res)
    
    }
  },

  filterLogin: async(req, res, next)=>{
    try {
      /** confirm the payload here */
      let check = await validator.testLogin(req.body);
      if(!check) return commonMethods.errorReturn(res, 'Intruder');
      const User = await user.exists({email:req.body.email});
      if(!User) return commonMethods.errorReturn(res, "User Not Found");
      next();
    } catch (e) {
      /** return 500 error */
      return commonMethods.serverErrorReturn(res)
    }
  },

  confirmToken: async(req, res, next)=>{
    try {
      let container = req.headers.authorization;
      if(!container) return commonMethods.errorReturn(res, 'Intruder');
      let token = container.split(" ")[1];
      let userId = verify(token, key);
      if(!userId) return commonMethods.errorReturn(res, "Please Login");
      console.log(userId.data);
      req.body.userId = userId.data;
      next();
    } catch (e) {
      console.log(e);
      /** return 500 error */
      return commonMethods.serverErrorReturn(res);
    }     
  }

}


module.exports = userMiddleWare;