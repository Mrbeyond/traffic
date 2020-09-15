"use strict";
const validator = require('./../validators/validators');
const commonMethods = require('./../controllers/commonMethods')


const userMiddleWare ={
  /** This is the middleware for user sign up and update */
  filterUserSignupAndUpdate: async(req, res, next)=>{
    try {
      /** confirm the payload here */
      if(!validator.testUser(req.body)) return commonMethods.errorReturn(res);
      next();
    } catch (e) {
      /** return 500 error */
      return commonMethods.serverErrorReturn(res)
    
    }
  }
}


module.exports = userMiddleWare;