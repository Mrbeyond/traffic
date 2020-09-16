"use strict";
const joi = require('joi');


const formValidators = {
  /** This validator schema for users update and sign up and asserted 
   * in the testSignup
   * */
  signUpAndUpdateValidators: joi.object({

    fullName: joi.string().min(3),
    email: joi.string().email(),
    city: joi.string(),
    country: joi.string(),
    phone: joi.string(),
    password: joi.string().regex(/^[A-Za-z0-9]{6,}/),
    CNIC:joi.string(),
    userType: joi.string().valid(...['admin', 'traffic-warden']),
    Gender: joi.string().valid(...['Male', 'Female'])

  }),

  /** This method puts the user schema payload to test
   * it will be called inside middleware for users signup and update
   */
  testUser: async(payload)=>{
    try {
      await formValidators.signUpAndUpdateValidators.validateAsync(payload);
      return true;
    } catch (e) {
      console.log(e)
     return false;
    }
  },

  /** The validator for login request payload  
   * will be called inside auth middleware for login
  */
  loginValidators: joi.object({

    email: joi.string().email(),
    password: joi.string().min(6)

  }),

  testLogin: async(payload)=>{
    try {
      await formValidators.loginValidators.validateAsync(payload);
      return true;
    } catch (e) {
      console.log(e);
      return false;
    }
  }
}

/** 
 * This woyld be imported in the part where the
 *  userController to validate the request payload values
 * 
 */

module.exports = formValidators;
