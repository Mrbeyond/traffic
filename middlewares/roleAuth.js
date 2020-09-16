"use strict";
const validator = require('../validators/validators');
const commonMethods = require('../controllers/commonMethods');
const {user} = require('../models/index');
const {verify} = require('jsonwebtoken');
require('dotenv').config();


const roleMiddleWare = {

  adminRole: async(req, res, next)=>{
    try {
      // let container = req.hearders.Authorization;
      // if(!container) return commonMethods.errorReturn(res, 'Intruder');
      // let token = container.split(" ")[1];
      // let userId = verify(token, key);
      // if(!userId) return commonMethods.errorReturn(res, "Please Login");
      const User = await user.findById(req.body.userId);
      if(User._doc.userType !== 'admin') return commonMethods.errorReturn(res, 'Intruder');
      next();
    } catch (e) {
      /** return 500 error */
      return commonMethods.errorReturn(res);
    }     
  }

}

module.exports = roleMiddleWare;